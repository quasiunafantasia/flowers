describe('directive: plant', function() {
  var element, scope, mockWateringService, mockDateTimeService, sampleName;

  sampleName = 'Test';
  beforeEach(module('flowersJs'));

  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();
    scope.sampleData = {
      name: sampleName,

    };

    element =
        '<plant data="sampleData">';

    scope.size = 100;
    $templateCache.put('app/listplants/PlantTemplate.html', '.<template-goes-here />')
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it("should get the plant`s name", function() {
    expect(scope.data.name).toEqual(sampleName);
  });

  it("should determine if the plant is sick", function() {
    
  });

  it("should count unwatered days", function() {
    
  });
});