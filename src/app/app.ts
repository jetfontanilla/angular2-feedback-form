import {bootstrap, Component, NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/angular2';

class Rating {
    stars:number;
    reasonId:number;
    comment:string;
}

class Reason {
    id:number;
    text:string;
}

var REASONS:Reason[] = [
    {id: 1, text: 'Reason 1'},
    {id: 2, text: 'Reason 2'},
    {id: 3, text: 'Reason 3'},
    {id: 4, text: 'Reason 4'},
    {id: 5, text: 'Reason 5'},
    {id: 6, text: 'Reason 6'}
];

@Component({
    selector: 'feedback-form',
    templateUrl: 'app/templates/feedback-form.html',
    styleUrls: ['app/css/feedback-form.css'],
    directives: [NgFor, NgIf, NgClass, FORM_DIRECTIVES]
})

class FeedbackFormComponent {
    public stars = [1, 2, 3, 4, 5];
    public tempStarRating = 0;
    public showFeedback = false;
    public showReasons = false;

    public reasons = REASONS;

    public rating:Rating = {
        stars: null,
        reasonId: null,
        comment: ''
    };

    isGoodRating():boolean {
        return this.rating.stars > 3;
    }

    showSubmitButton():boolean {
        return this.isGoodRating() || this.rating.reasonId > 0
    }

    clickStar(starRating:number):void {
        if (!starRating) {
            return;
        }
        this.rating.stars = starRating;
        this.showFeedback = true;
        this.showReasons = !this.isGoodRating();
    }

    hoverStar(starRating:number):void {
        this.tempStarRating = starRating;
    };

    starClass(starRating:number):any {
        var starClasses:any = {};
        starClasses['star-' + starRating] = true;
        starClasses['off'] = (this.tempStarRating || this.rating.stars) < starRating;

        return starClasses;
    }

    // insert post-processing function here
    submitFeedback():void {
        console.log(this.rating);
    }


}

bootstrap(FeedbackFormComponent);