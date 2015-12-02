var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Rating = (function () {
    function Rating() {
    }
    return Rating;
})();
var Reason = (function () {
    function Reason() {
    }
    return Reason;
})();
var REASONS = [
    { id: 1, text: 'Reason 1' },
    { id: 2, text: 'Reason 2' },
    { id: 3, text: 'Reason 3' },
    { id: 4, text: 'Reason 4' },
    { id: 5, text: 'Reason 5' },
    { id: 6, text: 'Reason 6' }
];
var FeedbackFormComponent = (function () {
    function FeedbackFormComponent() {
        this.stars = [1, 2, 3, 4, 5];
        this.tempStarRating = 0;
        this.showFeedback = false;
        this.showReasons = false;
        this.reasons = REASONS;
        this.rating = {
            stars: null,
            reasonId: null,
            comment: ''
        };
    }
    FeedbackFormComponent.prototype.isGoodRating = function () {
        return this.rating.stars > 3;
    };
    FeedbackFormComponent.prototype.showSubmitButton = function () {
        return this.isGoodRating() || this.rating.reasonId > 0;
    };
    FeedbackFormComponent.prototype.clickStar = function (starRating) {
        if (!starRating) {
            return;
        }
        this.rating.stars = starRating;
        this.showFeedback = true;
        this.showReasons = !this.isGoodRating();
    };
    FeedbackFormComponent.prototype.hoverStar = function (starRating) {
        this.tempStarRating = starRating;
    };
    ;
    FeedbackFormComponent.prototype.starClass = function (starRating) {
        var starClasses = {};
        starClasses['star-' + starRating] = true;
        starClasses['off'] = (this.tempStarRating || this.rating.stars) < starRating;
        return starClasses;
    };
    FeedbackFormComponent.prototype.submitFeedback = function () {
        console.log(this.rating);
    };
    FeedbackFormComponent = __decorate([
        angular2_1.Component({
            selector: 'feedback-form',
            templateUrl: 'app/templates/feedback-form.html',
            styleUrls: ['app/css/feedback-form.css'],
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.NgClass, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FeedbackFormComponent);
    return FeedbackFormComponent;
})();
angular2_1.bootstrap(FeedbackFormComponent);
//# sourceMappingURL=app.js.map