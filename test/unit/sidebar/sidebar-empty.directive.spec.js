'use srict';

describe('Directive: sidebarEmpty', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    compile = createCompiler('<sidebar-empty />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    compile(function (scope, element) {
      expect(element.find('.orodarius-sidebar-empty').length).toBe(1);
    });
  });

  describe('suggested subreddits', function() {
    it('should contain at least 4 items of certain structure', function() {
      compile(function (scope) {
        expect(scope.$ctrl.suggestedSubreddits.length).toBeGreaterThan(3);
        expect(scope.$ctrl.suggestedSubreddits[0]).toEqual(jasmine.objectContaining({
          name: 'videos'
        }));
      });
    });
  });

  describe('when clicked', () => {
    it('should call onSubredditClick with correct object', () => {
      let parentScope = { onSubredditClick: jasmine.createSpy() };
      compile(parentScope, { 'on-subreddit-click': 'onSubredditClick(subreddit)' }, function (scope, element) {
        element.find('.sidebar-suggestions  button').get(0).click();
        expect(parentScope.onSubredditClick).toHaveBeenCalledWith(scope.$ctrl.suggestedSubreddits[0].name);
      });
    });
  });

  describe('lastSubreddits property', function() {
    it('should be defined', function() {
      compile(function (scope) {
        expect(_.isArray(scope.$ctrl.lastSubreddits)).toBe(true);
      });
    });
  });
});

