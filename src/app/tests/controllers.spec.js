describe('auctionTest', function () {

  beforeEach(module('auction'));

  var controller, scope, AuctionUtils;

  beforeEach(inject(function(_$controller_, _$rootScope_, AuctionUtils){
    scope = _$rootScope_;
    controller = _$controller_('AuctionController', {$scope: scope, AuctionUtils: AuctionUtils});
  }));

//$scope.post_bid
  it('should be Defined', function () {
    expect(scope.post_bid).toBeDefined();
  });

  // it('should push alerts', function () {
  //   let length = scope.alerts.length;
  //   scope.form.bid = -1;
  //   expect(!!scope.post_bid()).toEqual(false);
  //   expect(scope.alerts.length).toEqual(length + 1);
  // });

  // it('should warn if the proposal you have submitted coincides with a proposal of the other participant bid', function () {
  //   let length = scope.alerts.length;
  //   scope.form.BidsForm = {};
  //   scope.form.BidsForm.$valid = true;
  //   scope.minimal_bid = {amount:2};
  //   scope.post_bid(2);

  //   expect(scope.alerts.length).toEqual(length + 1);
  //   expect(scope.alerts[0].msg && scope.alerts[0].type=='warning').toEqual(true);
  // });
//$scope.edit_bid
  it('should be Defined', function () {
    expect(scope.edit_bid).toBeDefined();
  });
  it('should change allow_bidding', function () {
    scope.edit_bid();
    expect(scope.allow_bidding).toBe(true);
  });
//$scope.max_bid_amount
  it('should be Defined', function () {
    expect(scope.max_bid_amount).toBeDefined();
  });
  it('should return 0', function () {
    expect(scope.max_bid_amount()).toBe(0);
  });
  // it('should find max bid amount', function () {
  //   scope.bidder_id = '{}';
  //   scope.auction_doc = {current_stage : 0};
  //   scope.auction_doc.stages = [{amount:3}];
  //   scope.auction_doc.minimalStep = {amount:1}
  //   expect(scope.max_bid_amount()).toBe(2);

  // });
//$scope.start_sync
  it('should be Defined', function () {
    expect(scope.start_sync).toBeDefined();
  });
//$scope.start_auction_process
  it('should be Defined', function () {
    expect(scope.start_auction_process).toBeDefined();
  });
//$scope.restart_changes
  it('should be Defined', function () {
    expect(scope.restart_changes).toBeDefined();
  });
//$scope.replace_document
  it('should be Defined', function () {
    expect(scope.replace_document).toBeDefined();
  });
//$scope.calculate_rounds
  it('should be Defined', function () {
    expect(scope.calculate_rounds).toBeDefined();
  });
  // it('should work correct', function () {
  //   scope.auction_doc = {stages : [{type:'pause'},{type:'pause'},5,{type:'pause'},{type:'pause'},{type:'pause'}]};
  //   scope.calculate_rounds();
  //   expect(scope.Rounds).toEqual([0, 1, 3, 4, 5]);
  // });
//$scope.scroll_to_stage
  it('should be Defined', function () {
    expect(scope.scroll_to_stage).toBeDefined();
  });

//$scope.array
  it('should be Defined', function () {
    expect(scope.array).toBeDefined();
  });
  it('should return Array', function () {
    expect(scope.array() instanceof Array).toBe(true);
  });
//$scope.open_menu
  it('should be Defined', function () {
    expect(scope.open_menu).toBeDefined();
  });

  // $rootScope.show_bids_form
  it('should be Defined', function() {
    expect(scope.show_bids_form).toBeDefined();
  });
  it('should work correct minimal amount bid for sealedbid: helper text', function() {
    scope.auction_doc = { current_stage: 12, current_phase: 'sealedbid', stages: [] };
    scope.auction_doc.stages[12] = { type: 'sealedbid' };
    scope.auction_doc.stages[3] = { bidder_id: 'id2' };
    scope.dutch_winner = { amount: 100 };
    scope.bidder_id = 'id1';
    scope.last_dutch_index = function() { return 3 };
    scope.show_bids_form();
    expect(scope.minimal_bid_amount).toBe(100.01);
  });
  it('should work correct minimal amount bid for bestbid: helper text', function() {
    scope.auction_doc = { current_stage: 12, current_phase: 'bestbid', stages: [], value: {} };
    scope.auction_doc.stages[12] = { type: 'bestbid' };
    scope.auction_doc.stages[3] = { bidder_id: 'id2' };
    scope.auction_doc.value = { amount: 100 };
    scope.dutch_winner = { amount: 100 };
    scope.sealedbid_winner = { amount: 200 };
    scope.bidder_id = 'id2';
    scope.last_dutch_index = function() { return 3 };
    scope.show_bids_form();
    expect(scope.minimal_bid_amount).toBe(201);
  });

//$scope.calculate_bid_temp
  it('should be Defined', function () {
    expect(scope.calculate_bid_temp).toBeDefined();
  });
  // it('should be Defined', function () {
  //   scope.form.bid = 11;
  //   scope.bidder_coeficient = 4;
  //   scope.calculate_bid_temp();
  //   expect(scope.form.bid_temp).toBe(11);
  //   expect(scope.form.full_price).toBe(2.75);
  // });
//$scope.calculate_full_price_temp
  // it('should be Defined', function () {
  //   expect(scope.calculate_full_price_temp).toBeDefined();
  // });
  // it('should work correct', function () {
  //   scope.form.full_price = 11;
  //   scope.bidder_coeficient = 3;
  //   scope.calculate_full_price_temp();
  //   expect(scope.form.full_price_temp).toBe(11);
  //   expect(scope.form.bid).toBe(33);
  // });
//$scope.set_bid_from_temp
  it('should be Defined', function () {
    expect(scope.set_bid_from_temp).toBeDefined();
  });
  it('should work correct', function () {
    scope.form.bid_temp = 0;
    scope.set_bid_from_temp();
    expect(scope.form.bid).toBe(0);
  });


/*//controller 'OffCanvasController'
//$scope.allert
  it('should be Defined', function () {
    expect(scope.allert).toBeDefined();
  });
//$scope.ok
  it('should be Defined', function () {
    expect(scope.ok).toBeDefined();
  });
//$scope.cancel
  it('should be Defined', function () {
    expect(scope.cancel).toBeDefined();
  });
//$scope.post_bid
  it('should be Defined', function () {
    expect(scope.post_bid).toBeDefined();
  });*/

//TODO directive



});