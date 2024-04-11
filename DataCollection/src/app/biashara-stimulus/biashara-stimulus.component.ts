import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-biashara-stimulus',
  standalone: true,
  imports:[NgIf, NgClass, MatRadioModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, ReactiveFormsModule, NgFor],
  templateUrl: './biashara-stimulus.component.html',
  styleUrl: './biashara-stimulus.component.css'
})
export class BiasharaStimulusComponent implements OnInit {

  personalDetails!:FormGroup;
  businessIndivual!:FormGroup;
  businessGroup!:FormGroup;



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
      passportPhoto:null,
      nationalIDPhoto:null,
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

    this.businessGroup=this.formBuilder.group({
      isGroupRegistered:['',],
      groupName:['',],
      year_registered:['',],
      chairpersonsContact:['',],
      numberofGroupmemb:['',],
      listOfGroupmembers:['',],
      groupConsitution:null,
      groupRegCert:null,
      // checkboxes
      // groupActivities:this.formBuilder.group({
        carWash: [false],
        metalWorks: [false],
        fishMongering: [false],
        healthCare:[false],
        wasteRecyclers:[false],
        tailoringBasketMaking:[false],
        hawking:[false],
        juiceMaking:[false],
        salonNail:[false],
        chickenFarming:[false],
        Mechanics:[false],
        shoeShiners:[false],
        catering:[false],
        bodaboda:[false],
        leatherShoeMakers:[false],
        cleaningServices:[false],
        artAndEntertainment:[false],
        dayCare:[false],
        masonry:[false],
        textile:[false],
        juakali:[false],
        generalMerchandise:[false],
        other:[false],
      
      othergroupActivites:['',],

      
      

      // expectations:this.formBuilder.group({
        increasedCapital:[false],
        accessToCustomers:[false],
        enhancedBusiness:[false],
        businessIncome:[false],
        employmentOpportunities:[false],
        betterLivelihood:[false],
        otherThingsExpected:[false],
      // }),
      otherExpectations:['',],
      comments:['',],


    })
  
  }


  onSubmit(){

    console.log('Personal Details:', this.personalDetails.value);
    console.log('Business (Individual):', this.businessIndivual.value);
    console.log('Business (Group/Organization):', this.businessGroup.value);
  }



}
