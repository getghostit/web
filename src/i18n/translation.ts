export interface Translation {
  '404': {
    description: string;
    title: string;
    heading: string;
    message: string;
    back: string;
  };
  about: {
    description: string;
    title: string;
  };
  aboutHeading: {
    title: string;
    description: string;
  };
  aboutMission: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    aboutImgAlt: string;
    stats: Array<{
      name: string;
      value: string;
    }>;
  };
  aboutTeam: {
    title: string;
    members: Array<{
      name: string;
      job: string;
      linkedin: string;
    }>;
  };
  contact: {
    description: string;
    title: string;
  };
  contactForm: {
    title: string;
    description: string;
    responseTime: string;
    policyText: string;
    policyLink: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    success: {
      title: string;
      desc: string;
      back: string;
    };
    error: {
      title: string;
      desc: string;
      back: string;
    };
  };
  contactInfo: {
    address: string;
    location: string;
    linkedin: string;
    github: string;
  };
  home: {
    description: string;
    title: string;
  };
  homeAbout: {
    title: string;
    description: string;
    cta: string;
  };
  homeCta: {
    title: string;
    description: string;
    contact: string;
    pricing: string;
  };
  homeExpertise: {
    title: string;
    expertises: Array<{
      id: string;
      name: string;
      description: string;
    }>;
  };
  homeHero: {
    title: string;
    visibleLetters: number[];
    description: string;
    heroImgAlt: string;
  };
  homeServices: {
    title: string;
    services: Array<{
      step: string;
      name: string;
      description: string;
    }>;
  };
  layoutFooter: {
    title: string;
    companyName: string;
    followUs: string;
    linkedin: string;
    github: string;
    company: string;
    regulatory: string;
    links: {
      home: string;
      about: string;
      pricing: string;
      contact: string;
      legal: string;
      privacy: string;
      styleguide: string;
    };
    description: string;
    copyright: string;
  };
  layoutHeader: {
    skipToContent: string;
    toggleLanguage: string;
    toggleTheme: string;
    toggleMenu: string;
    companyName: string;
    home: string;
    about: string;
    pricing: string;
    contact: string;
    description: string;
  };
  pricing: {
    description: string;
    title: string;
  };
  pricingCta: {
    title: string;
    description: string;
    action: string;
  };
  pricingFaq: {
    title: string;
    questions: Array<{
      id: string;
      title: string;
      answer: string;
    }>;
  };
  pricingHeading: {
    title: string;
    description: string;
  };
  legal: {
    description: string;
    title: string;
    heading: string;
    lastUpdated: string;
    publisherHeading: string;
    publisherText: string;
    contactFormLink: string;
    hostingHeading: string;
    hostingText: string;
    intellectualPropertyHeading: string;
    openSourceCreditsText: string;
    licenseLink: string;
    openSourceCreditsEnd: string;
    contentOwnershipText: string;
    reproductionProhibitedText: string;
    personalDataHeading: string;
    personalDataIntro: string;
    dataCollectionItem: string;
    dataProcessorsItem: string;
    userRightsItem: string;
    contactRightsText: string;
    complaintItem: string;
    privacyPolicyPromptText: string;
    privacyPolicyLink: string;
    cookiesHeading: string;
    cookiesText: string;
  };
  privacy: {
    description: string;
    title: string;
    heading: string;
    lastUpdated: string;
    intro: string;
    dataControllerHeading: string;
    dataControllerText: string;
    contactFormLink: string;
    collectedDataHeading: string;
    contactFormHeading: string;
    contactFormIntro: string;
    identificationData: string;
    contactData: string;
    messageContent: string;
    contactFormPurpose: string;
    securityHeading: string;
    securityIntro: string;
    securityPurpose: string;
    hostingHeading: string;
    hostingIntro: string;
    hostingLogsText: string;
    dataRecipientsHeading: string;
    dataRecipientsIntro: string;
    githubRecipient: string;
    basinRecipient: string;
    cloudflareRecipient: string;
    dataTransfersText: string;
    retentionPeriodHeading: string;
    contactRequestsRetention: string;
    technicalLogsRetention: string;
    userRightsHeading: string;
    userRightsIntro: string;
    rightOfAccess: string;
    rightOfRectification: string;
    rightToErasure: string;
    rightToObjection: string;
    rightToPortability: string;
    exerciseRightsPrompt: string;
    complaintText: string;
    cookiesHeading: string;
    cookiesText: string;
  };
  styleguide: {
    description: string;
    title: string;
    heading: string;
    logoDesc: string;
    companyName: string;
    colorsDesc: string;
    typoDesc: string;
    h1Demo: string;
    h2Demo: string;
    h3Demo: string;
    subtitleDemo: string;
    boldDemo: string;
  };
}
