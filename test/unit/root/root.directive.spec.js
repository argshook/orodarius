'use strict';

describe('Directive: root', () => {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius', $provide => {
    let mockedDirectives = ['sidebar', 'playerOverlay'];

    mockedDirectives.forEach(directive => $provide.factory(`${directive}Directive`, () => { return {}; }));
  }));

  beforeEach(inject(($compile, $rootScope) => {
    compile = createCompiler('<root />', $rootScope, $compile);
  }));

  it('should compile successfully', () => {
    compile((scope, element) => {
      expect(element.find('.orodarius-root').length).toBe(1);
    });
  });

  describe('keyboardEventsOptions', () => {
    it('should have expected properties', () => {
      compile(scope => {
        expect(scope.$ctrl.keyboardEventsOptions)
          .toEqual(jasmine.objectContaining({
            37: jasmine.any(Function),
            38: jasmine.any(Function),
            39: jasmine.any(Function),
            40: jasmine.any(Function),
            32: jasmine.any(Function),
            16: jasmine.any(Function),
            27: jasmine.any(Function)
          }));
      });
    });

    describe('when playlist is not empty', () => {
      beforeEach(inject(PlaylistService => {
        PlaylistService.playlist = [1];
      }));

      it('should call PlayerService.playPrevious on left key', inject(PlayerService => {
        compile(scope => {
          spyOn(PlayerService, 'playPrevious');
          spyOn(scope, '$apply');

          scope.$ctrl.keyboardEventsOptions[37]();

          expect(PlayerService.playPrevious).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));

      it('should call PlayerService.playPrevious on up key', inject(PlayerService => {
        compile(scope => {
          spyOn(PlayerService, 'playPrevious');
          spyOn(scope, '$apply');
          scope.$ctrl.keyboardEventsOptions[38]();

          expect(PlayerService.playPrevious).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));

      it('should call PlayerService.playNext on right key', inject(PlayerService => {
        compile(scope => {
          spyOn(PlayerService, 'playNext');
          spyOn(scope, '$apply');
          scope.$ctrl.keyboardEventsOptions[39]();

          expect(PlayerService.playNext).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));

      it('should call PlayerService.playPrevious on down key', inject(PlayerService => {
        compile(scope => {
          spyOn(PlayerService, 'playNext');
          spyOn(scope, '$apply');
          scope.$ctrl.keyboardEventsOptions[40]();

          expect(PlayerService.playNext).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));

      it('should call PlayerService.playOrPause on space key', inject(PlayerService => {
        compile(scope => {
          spyOn(PlayerService, 'playOrPause');

          scope.$ctrl.keyboardEventsOptions[32]();
          expect(PlayerService.playOrPause).toHaveBeenCalled();
        });
      }));

      it('should call SidebarService.toggle on space key', inject(SidebarService => {
        compile(scope => {
          spyOn(SidebarService, 'toggle');
          spyOn(scope, '$apply');

          scope.$ctrl.keyboardEventsOptions[16]();
          expect(SidebarService.toggle).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));

      it('should call SidebarService.close on escape key', inject(SidebarService => {
        compile(scope => {
          spyOn(scope, '$apply');
          spyOn(SidebarService, 'close');

          scope.$ctrl.keyboardEventsOptions[27]();
          expect(SidebarService.close).toHaveBeenCalled();
          expect(scope.$apply).toHaveBeenCalled();
        });
      }));
    });

    describe('when playlist is empty', () => {
      it('should not do anything on arrow keys', inject((PlaylistService, PlayerService) => {
        compile(function (scope) {
          PlaylistService.clear();
          spyOn(PlayerService, 'playPrevious');
          spyOn(PlayerService, 'playNext');

          scope.$ctrl.keyboardEventsOptions[40](); // up
          scope.$ctrl.keyboardEventsOptions[37](); // left
          scope.$ctrl.keyboardEventsOptions[39](); // right
          scope.$ctrl.keyboardEventsOptions[40](); // down

          expect(PlayerService.playPrevious).not.toHaveBeenCalled();
          expect(PlayerService.playNext).not.toHaveBeenCalled();
        });
      }));
    });
  });

  it('should use ng-bind-keys on root element properly', () => {
    compile((scope, element) => {
      expect(element.find('.orodarius-root').attr('ng-bind-keys')).toBe('$ctrl.keyboardEventsOptions');
    });
  });

  describe('nested components', () => {
    it('should exist as expected', () => {
      compile((scope, element) => {
        let expectedElements = ['player', 'sidebar', 'player-overlay'];

        expectedElements.
          forEach(selector => expect(element.find(selector).length).toBe(1));
      });
    });
  });
});

