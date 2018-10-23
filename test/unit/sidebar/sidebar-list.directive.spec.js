'use strict';

describe('Directive: sidebarList', function() {
  let compile;

  let directiveTemplate =
    '<sidebar-list list="list" on-item-click="onItemClick(item)" on-expand-click="onExpandClick()" is-loading="isLoading" current-subreddit="currentSubreddit" />';

  let parentScopeMock = {
    list: [1, 2, 3, 4, 5],
    isLoading: false,
    currentSubreddit: '',
    onItemClick: jasmine.createSpy('onItemClick'),
    onExpandClick: jasmine.createSpy('onExpandClick')
  };

  const driver = {
    more: e => e.find('.list-group-more'),
    videoItem: e => e.find('video-item'),
    validateAttrs: function(attrAndValue) {
      return attrAndValue.reduce((acc, [attr, value]) => {
        return this.videoItem(this.$).attr(attr) === value;
      }, false);
    }
  };

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));

  beforeEach(inject(($compile, $rootScope, $httpBackend, PlaylistService) => {
    compile = createCompiler(directiveTemplate, $rootScope, $compile, driver);
  }));

  it('should compile successfully', () => {
    compile((scope, element) => {
      expect(element.find('.sidebar-playlist').length).toBe(1);
    });
  });

  it('should expose received properties from attributes', () => {
    compile(parentScopeMock, scope => {
      expect(scope.$ctrl.list).toEqual(parentScopeMock.list);
      expect(typeof scope.$ctrl.onItemClick).toBe('function');
      expect(typeof scope.$ctrl.onExpandClick).toBe('function');
    });
  });

  describe('video items', () => {
    it('should be as many as $ctrl.playlist.length', () => {
      compile(parentScopeMock, (scope, element) => {
        expect(element.find('video-item').length).toBe(
          parentScopeMock.list.length
        );
      });
    });

    it('should have expected attributes', () => {
      compile(parentScopeMock, (scope, element, driver) => {
        let $videoItem = element.find('video-item').eq(0);
        const attrAndValue = [
          ['currentSubreddit', '$ctrl.currentSubreddit'],
          ['video-item', 'item'],
          ['index', '$index + 1']
        ];

        expect(driver.validateAttrs(attrAndValue)).toBe(true);
      });
    });

    describe('when clicked', () => {
      it('should call $ctrl.onItemClick correctly', () => {
        compile(parentScopeMock, (scope, element) => {
          element
            .find('video-item')
            .eq(0)
            .click();
          expect(parentScopeMock.onItemClick).toHaveBeenCalledWith(
            parentScopeMock.list[0]
          );
        });
      });
    });
  });

  describe('expand playlist btn', () => {
    describe('when $ctrl.isLoading is true', () => {
      it('should have expected class added', () => {
        let parentScope = _.clone(parentScopeMock);
        parentScope.isLoading = true;

        compile(parentScope, (scope, element, driver) => {
          expect(driver.more().hasClass('list-group-more--loading')).toBe(true);
        });
      });
    });

    describe('when list empty', () => {
      it('should be hidden', () => {
        let parentScope = _.clone(parentScopeMock);
        parentScope.list = [];

        compile(parentScope, function(scope, element, driver) {
          expect(driver.more().hasClass('ng-hide')).toBe(true);
        });
      });
    });

    describe('when clicked', () => {
      it('should call $ctrl.onExpandClick correctly', () => {
        compile(parentScopeMock, (scope, element, driver) => {
          driver.more().click();
          expect(parentScopeMock.onExpandClick).toHaveBeenCalled();
        });
      });
    });
  });
});
