import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BiasharaDataCollectionServiceService } from '../_services/biashara-data-collection-service.service';


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




  //SUB COUNTY AND WARDS
  SubCountiesList=[
    {value : "Dagoretti South", label:    "Dagoretti South"},
    {value : "Dagoretti North", label:    "Dagoretti North"},
    {value :  "Embakasi East", label: "Embakasi East"},
    {value :  "Embakasi Central", label:  "Embakasi Central"},
    {value : "Embakasi North", label:  "Embakasi North"},
    {value :  "Embakasi West", label:  "Embakasi West"},
    {value :  "Embakasi South", label:  "Embakasi South"},
    {value : "Kamukunji", label:  "Kamukunji"},
    {value :  "Kasarani", label:  "Kasarani"},
    {value : "Kibra", label:  "Kibra"},
    {value :  "Langata", label:  "Langata"},
    {value :  "Makadara", label: "Makadara"},
    {value : "Mathare", label: "Mathare"},
    {value : "Starehe", label:  "Starehe"},
    {value : "Westlands", label: "Westlands"},
    {value :  "Roysambu", label: "Roysambu"},
    {value : "Ruaraka", label: "Ruaraka"},

   ];

   WestlandsWardsList=[

    {value : "Kitisuru", label:    "Kitisuru"},
    {value :  "Parklands/Highridge", label: "Parklands/Highridge"},
    {value :  "Karura", label:  "Karura"},
    {value : "Kangemi", label:  "Kangemi"},
    {value :  "Mountain View", label:  "Mountain View"},
   ];

   EmbakasiSouthWardsList=[
    {value : "Imara Daima", label:    "Imara Daima"},
    {value :  "Kwa Njenga", label: "Kwa Njenga"},
    {value :  "Kwa Ruben", label:  "Kwa Ruben"},
    {value : "Pipeline", label:  "Pipeline"},
    {value : "Kware", label:  "Kware"},
   ];

   EmbakasiCentralWardsList=[
    {value : "Kayole North", label:    "Kayole North"},
    {value :  "Kayole Central", label: "Kayole Central"},
    {value :  "Kayole South", label:  "Kayole South"},
    {value : "Komarock", label:  "Komarock"},
    {value : "Matopeni/Spring Valley", label:  "Matopeni/Spring Valley"},
   ];

   EmbakasiEastWardsList=[
    {value : "Upper Savannah", label:    "Upper Savannah"},
    {value :  "Lower Savannah", label: "Lower Savannah"},
    {value :  "Embakasi", label:  "Embakasi"},
    {value : "Utawala", label:  "Utawala"},
    {value : "Mihango", label:  "Mihango"},
   ];

   EmbakasiWestWardsList=[
    {value : "Umoja I", label:    "Umoja I"},
    {value :  "Umoja II", label: "Umoja II"},
    {value :  "Mowlem", label:  "Mowlem"},
    {value : "Kariobangi South", label:  "Kariobangi South"},
    {value : "Maringo/Hamza", label:  "Maringo/Hamza"},
    ];

    MakadaraWardsList=[
      {value : "Viwandani", label:    "Viwandani"},
      {value :  "Harambee", label: "Harambee"},
      {value :  "Makongeni", label:  "Makongeni"},
      {value : "Pumwani", label:  "Pumwani"},
      {value : "Eastleigh North", label:  "Eastleigh North"},
     ];

     KamukunjiWardsList=[
      {value : "Eastleigh South", label:    "Eastleigh South"},
      {value :  "Airbase", label: "Airbase"},
      {value :  "California", label:  "California"},
      {value : "Ngara", label:  "Ngara"},
      {value : "Nairobi Central", label:  "Nairobi Central"},
     ];

     StareheWardsList=[
      {value : "Pangani", label:    "Pangani"},
      {value :  "Ziwani/Kariokor", label: "Ziwani/Kariokor"},
      {value :  "Landimawe", label:  "Landimawe"},
      {value : "Nairobi South", label:  "Nairobi South"},
      {value : "Hospital", label:  "Hospital"},
     ];

     MathareWardsList=[
      {value : "Mabatini", label:    "Mabatini"},
      {value :  "Huruma", label: "Huruma"},
      {value :  "Ngei", label:  "Ngei"},
      {value : "Mlango Kubwa", label:  "Mlango Kubwa"},
      {value : "Kiamaiko", label:  "Kiamaiko"},
     ];

   EmbakasiNorthWardsList=[
    {value : "Kariobangi North", label:    "Kariobangi North"},
    {value :  "Dandora Area I", label: "Dandora Area I"},
    {value :  "Dandora Area II", label:  "Dandora Area II"},
    {value : "Dandora Area III", label:  "Dandora Area III"},
    {value : "Dandora Area IV", label:  "Dandora Area IV"},

   ];

   DagorettiNorthWardsList=[

    {value : "Gatina", label:    "Gatina"},
    {value :  "Kilimani", label: "Kilimani"},
    {value :  "Kawangware", label:  "Kawangware"},
    {value : "Kileleshwa", label:  "Kileleshwa"},
    {value :  "Kabiro", label:  "Kabiro"},

   ];

   DagorettiSouthWardsList=[
    {value : "Mutu-ini", label:    "Mutu-ini"},
    {value :  "Ngando", label: "Ngando"},
    {value :  "Riruta", label:  "Riruta"},
    {value : "Uthiru/Ruthi", label:  "Uthiru/Ruthi"},
    {value :  "Waithaka", label:  "Waithaka"},

    ];

    LangataWardsList=[

    {value : "Karen", label:    "Karen"},
    {value :  "Nairobi West", label: "Nairobi West"},
    {value :  "Riruta", label:  "Riruta"},
    {value : "Mugumu-Ini", label:  "Mugumu-Ini"},
    {value :  "South C", label:  "South C"},
    {value :  "Nyayo Highrise", label:  "Nyayo Highrise"},
    ];

    KibraWardsList=[
      {value : "Laini saba", label:    "Laini saba"},
      {value :  "Lindi Makina", label: "Lindi Makina"},
      {value :  "Woodley /Kenyatta Golf Course", label:  "Woodley /Kenyatta Golf Course"},
      {value : "Sarangombe", label:  "Sarangombe"},
    ];

    RoysambuWardsList=[
      {value : "Githurai", label:    "Githurai"},
      {value :  "Kahawa West", label: "Kahawa West"},
      {value :  "Zimmerman", label:  "Zimmerman"},
      {value : "Roysambu", label:  "Roysambu"},
      {value : "Kahawa", label:  "Kahawa"},
    ];

    KasaraniWardsList=[
    {value : "Clay City", label:    "Clay City"},
    {value :  "Mwiki", label: "Mwiki"},
    {value :  "Kasarani", label:  "Kasarani"},
    {value : "Njiru", label:  "Njiru"},
    {value : "Ruai", label:  "Ruai"},
    ];

    RuarakaWardsList=[
    {value : "Baba Dogo", label:    "Baba Dogo"},
    {value :  "Utalii", label: "Utalii"},
    {value :  "Mathare North", label:  "Mathare North"},
    {value : "Lucky Summer", label:  "Lucky Summer"},
    {value : "Korogocho", label:  "Korogocho"},
    ];











  //CHECKBOXES FOR GROUP ACTIVTIES & BUSINESS OUTCOMES
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

 
  constructor( private formBuilder:FormBuilder, private biasharaDataCollectionService: BiasharaDataCollectionServiceService){

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

    //sending data to the backend
    // const response =  {... this.personalDetails.value, ... this.businessIndivual.value, ... this.businessGroup.value};
    // this.biasharaDataCollectionService.getResponse(response).subscribe({
    //   next: (res)=>{
    //   console.log(res);
    //   },
    //   error:(e) =>console.error(e)
    // })


 
    console.log('Business (Individual):', this.businessIndivual.value);
    console.log('Business (Group/Organization):', this.businessGroup.value);
    console.log('Personal Details:', this.personalDetails.value);

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
