import {Component} from '@angular/core';
import { SarfQuiz } from '../../Pages/SarfQuiz/SarfQuiz';
import { Panel } from '../../SharedComponents/panel';
//Filters
import { QuizFilter } from '../../Filters/RandomQuizPipeFilter';
//Services
import { Gardanen } from '../../Services/Gardanen.service';
import { Quiz } from '../../Services/Quiz.service';
import { Global } from '../../Services/Global.service';
import { ApiCallService } from '../../Services/ApiCall.service';


@Component({
  selector: 'sidenav-fab-example',
  templateUrl: 'HomePage.html',
  //styleUrls: ['HomePage.css'],
  providers: [Gardanen,Quiz,Global],
})
export class HomePageComponent 
{
  constructor(public gardanen: Gardanen, public quiz : Quiz) {
    this.loadGardan();
    this.loadQuiz();
  }
  selectedValue: string;
  
    gardans = [
      {value: '0', viewValue: 'معروف'},
      {value: '1', viewValue: 'مجہول'},
      {value: '2', viewValue: 'مثبت'}
    ];
    
    title_Muzare: string = 'فعلِ مضارع مثبت/منفی ، معروف/مجہول';
    title_Mazi: string = 'فعلِ ماضی مطلق، مثبت/منفی، معروف/مجہول';
    
   
    
    
    QuesAns;
    
    
    items;
    
    mazi_musbat_maroof;
    Expressions1 = 'َ';
    Expressions2 = 'ِ';
    Expressions3 = 'ُ';
    
    rootWord1 = "ف";
    rootWord2 = "ع";
    rootWord3 = "ل";
    isMaziManfi;
    isMaziMajhool
    isMuzareManfi;
    isMuzareMajhool;
    
    p3 = this.Expressions1;
    p2 = this.Expressions1;
    p1 = this.Expressions1;
    
    name1 = 'ف';
    name2 = 'ع';
    name3 = 'ل';
    name = "فعل";
    
    
  
    maroof = true;
    status = "Maroof";
    isChangeRoot = false;
    
    loadGardan(){
      this.items = this.gardanen.Gardan;  
    }
    loadQuiz(){
      this.QuesAns = this.quiz.Quiz;
    }
    
    SelectedSegaValue: string = "0";
    
    segay = [
      {value: '0', viewValue: 'معروف'},
      {value: '1', viewValue: 'مجھول'}
    ];
      
    // Maroof majhool change
    onChange(){
      
      if(this.SelectedSegaValue == "1"){
        this.p3 = this.Expressions1;
        this.p2 = this.Expressions1;
        this.p1 = this.Expressions1;
        this.status = "Maroof";
        
      }
      else{
        this.p3 = this.Expressions3;
        this.p2 = this.Expressions2;
        this.p1 = this.Expressions1;
        
        this.status = "Majhool";
        
        
      }
    }
    
}