export class BiasharaDataCollectionForm{

    personalDetails:{
        fullName?: string;
        identificationNumber?:string;
        gender?:string;
        other_gender?:string;
        disabilityStatus?:string;
        email?:string;
        phoneNumber?:string;
        passportPhoto?:string;
        nationalIDPhoto?:string;
    }={};

    businessIndivual:{
      businessName?:string,
      isbusinessRegistered?:string,
      registrationCertificate?:string,
      explainWhy?:string,
      subcounty?:string,
      ward?:string,
      building?:string,
      street?:string,
      landmark?:string,
      businessSector?:string,
      natureofBusiness?:string,
      numbofEmployees?:string,
      lengthofOperations?:string,
      challenges?:string,
      otherChallenges?:string,
      awareofProgram?:string,
      sourceofCapital?:string,
      capitalisAdequate?:string,
      marketingProducts?:string,
      targetMarket?:string,
      participatedintradefair?:string,
      tradefairParticipation?:string,
      capacityBuildingTraining?:string,
      capacityTrainingParticipation?:string
    }={}

    businessGroup:{
      isGroupRegistered?:string,
      groupName?:string,
      year_registered?:string,
      chairpersonsContact?:string,
      numberofGroupmemb?:string,
      listOfGroupmembers?:string,
      groupConsitution?:string,
      groupRegCert?:string,
      groupActivities?:string,
      othergroupActivites?:string,
      expectations?:string,
      otherExpectations?:string,
      comments?:string,
    }={}




}