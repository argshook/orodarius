'use srict';

describe('Directive: orodariusSidebarFoot', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    compile = createCompiler('<orodarius-sidebar-foot />', $rootScope, $compile);

    $httpBackend.whenGET(/api\.github\.com/).respond(200, {});

    var githubMock = '{"html_url": "htmlUrl.com", "commit": { "author": { "date": "123" }, "message": "hello" }}';
    $httpBackend.expectGET('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
      .respond(200, githubMock);

  }));

  it('should compile successfully', function() {
    compile(function (scope, element) {
      expect(element.find('.orodarius-sidebar-foot').length).toBe(1);
    });
  });

  describe('getLastUpdated method', function() {
    it('should be defined', function() {
      compile(function (scope) {
        expect(scope.$ctrl.getLastUpdated).toBeDefined();
      });
    });

    it('should return string from github API call', inject(function($httpBackend) {
      compile(function (scope) {
        // request mocked in before each somewhere at the top
        $httpBackend.flush();

        expect(scope.$ctrl.lastUpdatedData).toEqual({
          url: "htmlUrl.com",
          date: "123",
          message: "hello"
        });
      });
    }));
  });

});

