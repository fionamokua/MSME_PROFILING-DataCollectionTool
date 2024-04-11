import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-biashara-stimulus',
  standalone: true,
  imports:[NgIf, NgClass, MatRadioModule, MatFormFieldModule, MatSelectModule,
     MatCheckboxModule, ReactiveFormsModule, NgFor, CommonModule, NgSelectModule, FormsModule],
  templateUrl: './biashara-stimulus.component.html',
  styleUrl: './biashara-stimulus.component.css'
})
export class BiasharaStimulusComponent implements OnInit {

  personalDetails!:FormGroup;
  businessIndivual!:FormGroup;
  businessGroup!:FormGroup;


  showOtherOutcomeInputs:boolean =false;
  showOtherGroupActivities:boolean = false;


  groupActivitiesOptions =[
    { id: 'carWash', name: 'Car Wash' },
    { id: 'metalWorks', name: 'Metal works/ Furniture' },
    { id: 'fishMongering', name: 'Fish mongering' },
    { id: 'healthCare', name: 'Health Care' },
    { id: 'wasteRecyclers', name: 'Waste recyclers/ CBOs' },
    { id: 'tailoringBasketMaking', name: 'Tailoring/ Basket Making' },
    { id: 'hawking', name: 'Hawking' },
    { id: 'juiceMaking', name: 'Juice making' },
    { id: 'salonNail', name: 'Salon/ nail salon' },
    { id: 'chickenFarming', name: 'Chicken farming' },
    { id: 'Mechanics', name: 'Mechanics' },
    { id: 'shoeShiners', name: 'Shoe shiners' },
    { id: 'catering', name: 'Catering' },
    { id: 'bodaboda', name: 'Boda Boda' },
    { id: 'leatherShoeMakers', name: 'Leather Shoe makers' },
    { id: 'cleaningServices', name: 'Cleaning services' },
    { id: 'artAndEntertainment', name: 'Arts and Entertainment' },
    { id: 'dayCare', name: 'Day care' },
    { id: 'masonry', name: 'Masonry' },
    { id: 'textile', name: 'Textile' },
    { id: 'juakali', name: 'Jua Kali' },
    { id: 'generalMerchandise', name: 'General Merchandise' },
    { id: 'otherGroupActivities', name: 'Other:' },
  ]

  businessOutcomeOptions =[
    { id: 'increasedCapital', name: 'Increased working capital' },
    { id: 'accessToCustomers', name: 'Access to more customers' },
    { id: 'enhancedBusiness', name: 'Enhanced business/ entrepreneurial skill' },
    { id: 'businessIncome', name: 'Increased business income' },
    { id: 'employmentOpportunities', name: 'More employment opportunities' },
    { id: 'betterLivelihood', name: 'Better livelihood' },
    { id: 'otherThingsExpected', name: 'Other:' },
  ]

 
  constructor( private formBuilder:FormBuilder){

  }
  ngOnInit(){

    this.personalDetails =this.formBuilder.group({
      fullName: ['',],
      identificationNumber:['',],
      gender:['', ],
      other_gender:['',],
      disabilityStatus:['',],
      email:['',],
      phoneNumber:['',],
      passportPhoto:['',],
      nationalIDPhoto:['',],
    });

    this.personalDetails.get('gender')?.valueChanges.subscribe(value=>{
      if (value !== 'other') {
        this.personalDetails.get('other_gender')?.setValue('');
          console.log('Personal Details:', this.personalDetails.value);
      }
    });

    this.businessIndivual=this.formBuilder.group({
      businessName:['',],
      isbusinessRegistered:['',],
      registrationCertificate:null,
      explainWhy:['',],
      subcounty:['',],
      ward:['',],
      building:['',],
      street:['',],
      landmark:['',],
      businessSector:['',],
      natureofBusiness:['',],
      numbofEmployees:['',],
      lengthofOperations:['',],
      challenges:['',],
      otherChallenges:['',],
      awareofProgram:['',],
      sourceofCapital:['',],
      capitalisAdequate:['',],
      marketingProducts:['',],
      targetMarket:['',],
      participatedintradefair:['',],
      tradefairParticipation:['',],
      capacityBuildingTraining:['',],
      capacityTrainingParticipation:['',]
    });


    this.businessIndivual.get('isbusinessRegistered')?.valueChanges.subscribe(value=>{
      if (value !== 'yes') {
        this.businessIndivual.get('registrationCertificate')?.setValue('');
          console.log('Personal Details:', this.businessIndivual.value);
      }else{
        this.businessIndivual.get('explainWhy')?.setValue('');
      }
    });


   this.businessIndivual.get('challenges')?.valueChanges.subscribe(value=>{
     if(value !== 'other'){
       this.businessIndivual.get('otherChallenges')?.setValue('');
     }
   });

   this.businessIndivual.get('participatedintradefair')?.valueChanges.subscribe(value=>{
    if(value !== 'no'){
      this.businessIndivual.get('tradefairParticipation')?.setValue('');
    }
  });

  this.businessIndivual.get('capacityBuildingTraining')?.valueChanges.subscribe(value=>{
    if(value !== 'no'){
      this.businessIndivual.get('capacityTrainingParticipation')?.setValue('');
    }
  });



    this.businessGroup=this.formBuilder.group({
      isGroupRegistered:['',],
      groupName:['',],
      year_registered:['',],
      chairpersonsContact:['',],
      numberofGroupmemb:['',],
      listOfGroupmembers:['',],
      groupConsitution:null,
      groupRegCert:null,

      // checkbox1
      groupActivities:[[]],
      othergroupActivites:['',],
      //checkbox2
      expectations:[[]],
      otherExpectations:['',],
      
      comments:['',],


    })
  
  }


  onExpectationChange(selectedValues: any[]) {
    this.showOtherOutcomeInputs = selectedValues.includes('otherThingsExpected');
    if (!this.showOtherOutcomeInputs) {
      this.businessGroup.get('otherExpectation')?.reset(); // Reset the other expectation input field
    }
  }

  onGroupActivitiesChange(selectedValues: any[]){
    this.showOtherGroupActivities = selectedValues.includes('otherGroupActivities');
    if (!this.showOtherGroupActivities) {
      this.businessGroup.get('otherGroupActivities')?.reset(); // Reset the other expectation input field
    }
  }



  onSubmit(){


 
    console.log('Business (Individual):', this.businessIndivual.value);
    console.log('Business (Group/Organization):', this.businessGroup.value);
    console.log('Personal Details:', this.personalDetails.value);



    const selectedValues = Object.keys(this.businessGroup.value).filter(key => this.businessGroup.value[key]);
    console.log('Selected Values:', selectedValues);

  }

















   // carWash: [false],
        // metalWorks: [false],
        // fishMongering: [false],
        // healthCare:[false],
        // wasteRecyclers:[false],
        // tailoringBasketMaking:[false],
        // hawking:[false],
        // juiceMaking:[false],
        // salonNail:[false],
        // chickenFarming:[false],
        // Mechanics:[false],
        // shoeShiners:[false],
        // catering:[false],
        // bodaboda:[false],
        // leatherShoeMakers:[false],
        // cleaningServices:[false],
        // artAndEntertainment:[false],
        // dayCare:[false],
        // masonry:[false],
        // textile:[false],
        // juakali:[false],
        // generalMerchandise:[false],
        // other:[false],




        // increasedCapital:[false],
        // accessToCustomers:[false],
        // enhancedBusiness:[false],
        // businessIncome:[false],
        // employmentOpportunities:[false],
        // betterLivelihood:[false],
        // otherThingsExpected:[false],



}
