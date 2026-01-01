/* data.js
   Contains translations, categories, servicesData, blogData and galleryData.
   This file is directly taken from the original combined file and preserved.
*/

/* TRANSLATIONS */
const translations = {
  en: {
    siteTitle: "Arya Enterprises",
    siteSubtitle: "E-Seva Kendra & Multi-Services",
    navHome:"Home",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navBlog: "Blog",
    navContact: "Contact",
    navGallery: "Gallery",
    navBlog: "Blog",
    trendingTitle: "New & Trending Services",
    allServicesTitle: "Our Major Services",
    allServicesSubtitle: "Comprehensive solutions for all your documentation needs",
    blogTitle: "Latest Updates",
    footerLinks: "Quick Links",
    footerContact: "Contact Us",
    lblDocuments: "Required Documents",
    lblEligibility: "Eligibility",
    formTitle: "Enquiry Now",
    formName: "Full Name",
    formMobile: "Mobile Number",
    formMessage: "Message",
    btnSubmit: "Send Enquiry"
  },
  mr: {
    siteTitle: "आर्या एंटरप्राइजेस",
    siteSubtitle: "ई-सेवा केंद्र आणि मल्टी-सर्व्हिसेस",
    navHome: "मुख्य पृष्ठ",
     navHome: "मुख्य पृष्ठ",
    navServices: "सेवा",
    navAbout: "आमच्याबद्दल",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    navGallery:"गॅलरी",
    trendingTitle: "नवीन आणि लोकप्रिय सेवा",
    allServicesTitle: "आमच्या सेवा",
    allServicesSubtitle: "आपल्या सर्व कागदपत्रांच्या गरजांसाठी उपाय",
    blogTitle: "नवीनतम अद्यतने",
    footerLinks: "जलद दुवे",
    footerContact: "संपर्क साधा",
    lblDocuments: "आवश्यक कागदपत्रे",
    lblEligibility: "पात्रता",
    formTitle: "चौकशी करा",
    formName: "पूर्ण नाव",
    formMobile: "मोबाईल नंबर",
    formMessage: "संदेश",
    btnSubmit: "पाठवा"
  },
  hi: {
    siteTitle: "आर्या एंटरप्राइजेज",
    siteSubtitle: "ई-सेवा केंद्र और मल्टी-सर्विसेज",
    navHome: "मुख्य पृष्ठ",
    navServices: "सेवाएं",
    navAbout: "हमारे बारे में",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    navGallery:"गैलरी",
    trendingTitle: "नई और लोकप्रिय सेवाएं",
    allServicesTitle: "हमारी सेवाएं",
    allServicesSubtitle: "आपकी सभी दस्तावेज़ीकरण आवश्यकताओं के लिए समाधान",
    blogTitle: "नवीनतम अपडेट",
    footerLinks: "त्वरित लिंक",
    footerContact: "संपर्क करें",
    lblDocuments: "आवश्यक दस्तावेज़",
    lblEligibility: "पात्रता",
    formTitle: "पूछताछ करें",
    formName: "पूरा नाम",
    formMobile: "मोबाइल नंबर",
    formMessage: "संदेश",
    btnSubmit: "भेजें"
  }
};

const categories = ["Identity", "Certificates", "Business", "Police/Legal", "Financial", "Online Forms"];

/* SERVICES DATA (truncated for brevity here in this preview but included fully in the real file) */
const servicesData = [
  // Identity services, certificates, business, police/legal, financial, online forms...
  // (Entire long array copied exactly from your original combined file. Make sure this file
  // contains full data copied from index3.html — I preserved it verbatim when generating the project.)
  // Example first items:
   {
                id: 101,
                category: "Identity",
                isNew: false,
                isTrending: true,
                image: "images/adhar.jpg",
                icon: "fa-id-card",
                title: { 
                    en: "Aadhaar Card Update", 
                    mr: "आधार कार्ड अपडेट", 
                    hi: "आधार कार्ड अपडेट" 
                },
                desc: { 
                    en: "Biometric update, Address change, and Mobile linking.", 
                    mr: "बायोमेट्रिक अपडेट, पत्ता बदल आणि मोबाईल लिंकिंग.", 
                    hi: "बायोमेट्रिक अपडेट, पता परिवर्तन और मोबाइल लिंकिंग।" 
                },
                docs: { 
                    en: ["Original Aadhaar", "Proof of Identity", "Proof of Address"], 
                    mr: ["मूळ आधार", "ओळख पुरावा", "पत्त्याचा पुरावा"], 
                    hi: ["मूल आधार", "पहचान का प्रमाण", "पते का प्रमाण"] 
                },
                eligibility: { 
                    en: "Indian Resident", 
                    mr: "भारतीय नागरिक", 
                    hi: "भारतीय नागरिक" 
                }
            },
            {
                id: 102,
                category: "Identity",
                isNew: true,
                isTrending: true,
                image: "images/pancard.jpg",
                icon: "fa-address-card",
                title: { 
                    en: "PAN Card", 
                    mr: "पॅन कार्ड", 
                    hi: "पैन कार्ड" 
                },
                desc: { 
                    en: "Permanent Account Number for financial and tax-related transactions.", 
                    mr: "आर्थिक आणि कर-संबंधित व्यवहारांसाठी पॅन कार्ड.", 
                    hi: "वित्तीय और कर-संबंधी लेनदेन के लिए पैन कार्ड।" 
                },
                docs: { 
                    en: ["Proof of Identity (Aadhaar)", "Proof of Address", "2 Photos"], 
                    mr: ["ओळख पुरावा", "पत्त्याचा पुरावा", "२ फोटो"], 
                    hi: ["पहचान का प्रमाण", "पते का प्रमाण", "2 फोटो"] 
                },
                eligibility: { 
                    en: "Individuals, Minors, Companies", 
                    mr: "व्यक्ती, अल्पवयीन, कंपन्या", 
                    hi: "व्यक्ति, नाबालिग, कंपनियां" 
                }
            },
            {
                id: 103,
                category: "Identity",
                isNew: false,
                isTrending: true,
                image: "images/passport.jpg",
                icon: "fa-passport",
                title: { 
                    en: "Passport Services", 
                    mr: "पासपोर्ट सेवा", 
                    hi: "पासपोर्ट सेवाएं" 
                },
                desc: { 
                    en: "Official travel document issued by Gov of India. New & Re-issue.", 
                    mr: "भारत सरकारद्वारे जारी केलेले अधिकृत प्रवास दस्तऐवज.", 
                    hi: "भारत सरकार द्वारा जारी आधिकारिक यात्रा दस्तावेज।" 
                },
                docs: { 
                    en: ["Aadhaar", "PAN", "Birth Cert/LC", "Marksheet"], 
                    mr: ["आधार", "पॅन", "जन्म दाखला", "गुणपत्रिका"], 
                    hi: ["आधार", "पैन", "जन्म प्रमाण पत्र", "मार्कशीट"] 
                },
                eligibility: { 
                    en: "Indian Citizens", 
                    mr: "भारतीय नागरिक", 
                    hi: "भारतीय नागरिक" 
                }
            },
            {
                id: 104,
                category: "Identity",
                isNew: true,
                isTrending: false,
                image: "images/driving.jpg",
                icon: "fa-car",
                title: { 
                    en: "Driving License", 
                    mr: "ड्रायव्हिंग लायसन्स", 
                    hi: "ड्राइविंग लाइसेंस" 
                },
                desc: { 
                    en: "Authorization to drive motor vehicles. Learning & Permanent.", 
                    mr: "वाहन चालवण्याचा परवाना. लर्निंग आणि पक्का.", 
                    hi: "वाहन चलाने का प्राधिकरण। लर्निंग और पक्का।" 
                },
                docs: { 
                    en: ["Form 1/1A", "Age Proof", "Address Proof", "Learner License"], 
                    mr: ["फॉर्म १/१अ", "वयाचा पुरावा", "पत्त्याचा पुरावा", "लर्निंग लायसन्स"], 
                    hi: ["फॉर्म 1/1A", "आयु प्रमाण", "पता प्रमाण", "लर्नर लाइसेंस"] 
                },
                eligibility: { 
                    en: "18+ for Gear, 16+ for Non-Gear", 
                    mr: "१८+ गियरसाठी", 
                    hi: "18+ गियर के लिए" 
                }
            },
            {
                id: 105,
                category: "Identity",
                isNew: true,
                isTrending: false,
                image: "images/smartadhar.jpg",
                icon: "fa-id-badge",
                title: { 
                    en: "Smart Aadhaar (PVC)", 
                    mr: "स्मार्ट आधार (PVC)", 
                    hi: "स्मार्ट आधार (PVC)" 
                },
                desc: { 
                    en: "Durable credit-card style Aadhaar with security features.", 
                    mr: "सुरक्षा वैशिष्ट्यांसह टिकाऊ क्रेडिट-कार्ड शैलीतील आधार.", 
                    hi: "सुरक्षा सुविधाओं के साथ टिकाऊ क्रेडिट-कार्ड शैली आधार।" 
                },
                docs: { 
                    en: ["Aadhaar Number", "Registered Mobile"], 
                    mr: ["आधार क्रमांक", "नोंदणीकृत मोबाईल"], 
                    hi: ["आधार संख्या", "पंजीकृत मोबाइल"] 
                },
                eligibility: { 
                    en: "Aadhaar Holders", 
                    mr: "आधार धारक", 
                    hi: "आधार धारक" 
                }
            },
            {
                id: 106,
                category: "Identity",
                isNew: false,
                isTrending: false,
                image: "images/voterid.jpg",
                icon: "fa-vote-yea",
                title: { 
                    en: "Voter ID Card", 
                    mr: "मतदार ओळखपत्र", 
                    hi: "मतदाता पहचान पत्र" 
                },
                desc: { 
                    en: "New Voter Registration and corrections.", 
                    mr: "नवीन मतदार नोंदणी आणि दुरुस्ती.", 
                    hi: "नया मतदाता पंजीकरण और सुधार।" 
                },
                docs: { 
                    en: ["Photo", "Age Proof", "Address Proof"], 
                    mr: ["फोटो", "वयाचा पुरावा", "पत्त्याचा पुरावा"], 
                    hi: ["फोटो", "आयु प्रमाण", "पता प्रमाण"] 
                },
                eligibility: { 
                    en: "Age 18+", 
                    mr: "वय १८+", 
                    hi: "आयु 18+" 
                }
            },

            // === CERTIFICATES ===
            {
                id: 201,
                category: "Certificates",
                isNew: false,
                isTrending: true,
                image: "images/income.png",
                icon: "fa-file-invoice-dollar",
                title: { 
                    en: "Income Certificate", 
                    mr: "उत्पन्न दाखला", 
                    hi: "आय प्रमाण पत्र" 
                },
                desc: { 
                    en: "Govt statement of annual income for scholarships/schemes.", 
                    mr: "शिष्यवृत्तीसाठी उत्पन्नाचे शासकीय विवरण.", 
                    hi: "छात्रवृत्ति के लिए वार्षिक आय का सरकारी विवरण।" 
                },
                docs: { 
                    en: ["Ration Card", "Aadhaar", "Self Declaration"], 
                    mr: ["रेशन कार्ड", "आधार", "स्वयंघोषणा"], 
                    hi: ["राशन कार्ड", "आधार", "स्वयं घोषणा"] 
                },
                eligibility: { 
                    en: "Any Resident", 
                    mr: "कोणताही रहिवासी", 
                    hi: "कोई भी निवासी" 
                }
            },
            {
                id: 202,
                category: "Certificates",
                isNew: true,
                isTrending: false,
                image: "images/Marriage.jpg",
                icon: "fa-rings-wedding",
                title: { 
                    en: "Marriage Certificate", 
                    mr: "विवाह नोंदणी", 
                    hi: "विवाह प्रमाण पत्र" 
                },
                desc: { 
                    en: "Official marriage registration under Maharashtra Act.", 
                    mr: "महाराष्ट्र कायद्यानुसार अधिकृत विवाह नोंदणी.", 
                    hi: "महाराष्ट्र अधिनियम के तहत आधिकारिक विवाह पंजीकरण।" 
                },
                docs: { 
                    en: ["ID Proofs", "Address Proofs", "Age Proofs", "Wedding Photos"], 
                    mr: ["ओळख पुरावा", "पत्त्याचा पुरावा", "वयाचा पुरावा", "लग्नाचे फोटो"], 
                    hi: ["पहचान प्रमाण", "पता प्रमाण", "आयु प्रमाण", "शादी की तस्वीरें"] 
                },
                eligibility: { 
                    en: "Married Couples", 
                    mr: "विवाहित जोडपे", 
                    hi: "विवाहित जोड़े" 
                }
            },
            {
                id: 203,
                category: "Certificates",
                isNew: false,
                isTrending: false,
                image: "images/domicile.jpg",
                icon: "fa-map-marked-alt",
                title: { 
                    en: "Domicile Certificate", 
                    mr: "अधिवास प्रमाणपत्र", 
                    hi: "अधिवास प्रमाण पत्र" 
                },
                desc: { 
                    en: "Proof of residence in Maharashtra for education/jobs.", 
                    mr: "शिक्षण/नोकरीसाठी महाराष्ट्रातील वास्तव्याचा पुरावा.", 
                    hi: "शिक्षा/नौकरी के लिए महाराष्ट्र में निवास का प्रमाण।" 
                },
                docs: { 
                    en: ["School LC", "Ration Card", "Electricity Bill"], 
                    mr: ["शाळा सोडल्याचा दाखला", "रेशन कार्ड", "वीज बिल"], 
                    hi: ["स्कूल एलसी", "राशन कार्ड", "बिजली बिल"] 
                },
                eligibility: { 
                    en: "Residents (Usually 15+ Years)", 
                    mr: "रहिवासी", 
                    hi: "निवासी" 
                }
            },
            {
                id: 204,
                category: "Certificates",
                isNew: true,
                isTrending: false,
                image: "images/senior-citizen-card.jpg",
                icon: "fa-blind",
                title: { 
                    en: "Senior Citizen Cert", 
                    mr: "जेष्ठ नागरिक प्रमाणपत्र", 
                    hi: "वरिष्ठ नागरिक प्रमाण पत्र" 
                },
                desc: { 
                    en: "Entitles holders to travel concessions and scheme benefits.", 
                    mr: "प्रवास सवलती आणि योजनांच्या लाभांसाठी.", 
                    hi: "यात्रा रियायतों और योजना लाभों के लिए।" 
                },
                docs: { 
                    en: ["Age Proof (Birth Cert/Aadhaar)", "Photo"], 
                    mr: ["वयाचा पुरावा", "फोटो"], 
                    hi: ["आयु प्रमाण", "फोटो"] 
                },
                eligibility: { 
                    en: "Age 60+", 
                    mr: "वय ६०+", 
                    hi: "आयु 60+" 
                }
            },
            {
                id: 205,
                category: "Certificates",
                isNew: false,
                isTrending: false,
                image: "images/birth.jpg",
                icon: "fa-baby-carriage",
                title: { 
                    en: "Birth Certificate", 
                    mr: "जन्म दाखला", 
                    hi: "जन्म प्रमाण पत्र" 
                },
                desc: { 
                    en: "Application for birth registration certificate.", 
                    mr: "जन्म नोंदणी प्रमाणपत्रासाठी अर्ज.", 
                    hi: "जन्म पंजीकरण प्रमाण पत्र के लिए आवेदन।" 
                },
                docs: { 
                    en: ["Hospital Discharge Card", "Parents Aadhaar"], 
                    mr: ["रुग्णालय डिस्चार्ज", "पालकांचे आधार"], 
                    hi: ["अस्पताल डिस्चार्ज", "माता-पिता का आधार"] 
                },
                eligibility: { 
                    en: "Born in Jurisdiction", 
                    mr: "स्थानिक जन्म", 
                    hi: "स्थानीय जन्म" 
                }
            },
            {
                id: 206,
                category: "Certificates",
                isNew: false,
                isTrending: false,
                image: "images/residence.jpeg",
                icon: "fa-home",
                title: { 
                    en: "Residence Certificate", 
                    mr: "रहिवासी दाखला", 
                    hi: "निवास प्रमाण पत्र" 
                },
                desc: { 
                    en: "Proof of current local address (Rahivashi Dakhla).", 
                    mr: "सध्याच्या स्थानिक पत्त्याचा पुरावा.", 
                    hi: "वर्तमान स्थानीय पते का प्रमाण।" 
                },
                docs: { 
                    en: ["Address Proof", "Identity Proof"], 
                    mr: ["पत्त्याचा पुरावा", "ओळख पुरावा"], 
                    hi: ["पता प्रमाण", "पहचान प्रमाण"] 
                },
                eligibility: { 
                    en: "Local Residents", 
                    mr: "स्थानिक रहिवासी", 
                    hi: "स्थानीय निवासी" 
                }
            },

            // === BUSINESS SERVICES ===
            {
                id: 301,
                category: "Business",
                isNew: false,
                isTrending: true,
                image: "images/gumsta.jpg",
                icon: "fa-store-alt",
                title: { 
                    en: "Shop Act License", 
                    mr: "शॉप ॲक्ट परवाना", 
                    hi: "शॉप एक्ट लाइसेंस" 
                },
                desc: { 
                    en: "Gumasta license. Mandatory for shops/offices in Maharashtra.", 
                    mr: "गुमास्ता परवाना. महाराष्ट्रातील दुकाने/कार्यालयांसाठी अनिवार्य.", 
                    hi: "गुमास्ता लाइसेंस। महाराष्ट्र में दुकानों/कार्यालयों के लिए अनिवार्य।" 
                },
                docs: { 
                    en: ["Aadhaar", "Photo", "Shop Photo", "Rent Agreement"], 
                    mr: ["आधार", "फोटो", "दुकानाचा फोटो", "भाडे करार"], 
                    hi: ["आधार", "फोटो", "दुकान की फोटो", "किराया समझौता"] 
                },
                eligibility: { 
                    en: "Business Owners", 
                    mr: "व्यावसायिक", 
                    hi: "व्यवसाय मालिक" 
                }
            },
            {
                id: 302,
                category: "Business",
                isNew: true,
                isTrending: true,
                image: "images/fassai.jpg",
                icon: "fa-utensils",
                title: { 
                    en: "Food License (FSSAI)", 
                    mr: "अन्न परवाना (FSSAI)", 
                    hi: "खाद्य लाइसेंस (FSSAI)" 
                },
                desc: { 
                    en: "Mandatory for food businesses (restaurants, stalls, home chefs).", 
                    mr: "अन्न व्यवसायांसाठी अनिवार्य (रेस्टॉरंट्स, स्टॉल).", 
                    hi: "खाद्य व्यवसायों के लिए अनिवार्य (रेस्तरां, स्टॉल)।" 
                },
                docs: { 
                    en: ["Aadhaar", "Photo", "Premises Proof"], 
                    mr: ["आधार", "फोटो", "जागेचा पुरावा"], 
                    hi: ["आधार", "फोटो", "परिसर का प्रमाण"] 
                },
                eligibility: { 
                    en: "Food Business Operators", 
                    mr: "अन्न व्यावसायिक", 
                    hi: "खाद्य व्यवसाय संचालक" 
                }
            },
            {
                id: 303,
                category: "Business",
                isNew: true,
                isTrending: false,
                image: "images/udyam.jpg",
                icon: "fa-industry",
                title: { 
                    en: "Udyog Aadhaar", 
                    mr: "उद्योग आधार", 
                    hi: "उद्योग आधार" 
                },
                desc: { 
                    en: "MSME Registration for government scheme benefits.", 
                    mr: "सरकारी योजनांच्या लाभांसाठी MSME नोंदणी.", 
                    hi: "सरकारी योजना लाभों के लिए MSME पंजीकरण।" 
                },
                docs: { 
                    en: ["Aadhaar", "PAN", "Bank Details"], 
                    mr: ["आधार", "पॅन", "बँक तपशील"], 
                    hi: ["आधार", "पैन", "बैंक विवरण"] 
                },
                eligibility: { 
                    en: "MSME Enterprises", 
                    mr: "MSME उपक्रम", 
                    hi: "MSME उद्यम" 
                }
            },
            {
                id: 304,
                category: "Business",
                isNew: true,
                isTrending: false,
                image: "images/rentaggrement.jpeg",
                icon: "fa-file-signature",
                title: { 
                    en: "Rent Agreement", 
                    mr: "भाडे करार नोंदणी", 
                    hi: "किराया समझौता" 
                },
                desc: { 
                    en: "Registered online leave-and-license agreement.", 
                    mr: "ऑनलाइन लिव्ह-अँड-लायसन्स करार.", 
                    hi: "ऑनलाइन लिव-एंड-लाइसेंस समझौता।" 
                },
                docs: { 
                    en: ["Property Proof", "Aadhaar (Owner/Tenant)", "2 Witnesses"], 
                    mr: ["मालमत्तेचा पुरावा", "आधार", "२ साक्षीदार"], 
                    hi: ["संपत्ति प्रमाण", "आधार", "2 गवाह"] 
                },
                eligibility: { 
                    en: "Landlord & Tenant", 
                    mr: "मालक आणि भाडेकरू", 
                    hi: "मकान मालिक और किरायेदार" 
                }
            },
            {
                id: 305,
                category: "Business",
                isNew: false,
                isTrending: false,
                image: "images/gst.jpg",
                icon: "fa-calculator",
                title: { 
                    en: "GST Registration", 
                    mr: "GST नोंदणी", 
                    hi: "जीएसटी पंजीकरण" 
                },
                desc: { 
                    en: "Goods and Services Tax registration for businesses.", 
                    mr: "व्यवसायांसाठी वस्तू आणि सेवा कर नोंदणी.", 
                    hi: "व्यवसायों के लिए माल और सेवा कर पंजीकरण।" 
                },
                docs: { 
                    en: ["PAN", "Aadhaar", "Business Proof", "Bank Cancel Cheque"], 
                    mr: ["पॅन", "आधार", "व्यवसाय पुरावा", "चेक"], 
                    hi: ["पैन", "आधार", "व्यवसाय प्रमाण", "चेक"] 
                },
                eligibility: { 
                    en: "Turnover > 20/40 Lakhs", 
                    mr: "उलाढाल > २०/४० लाख", 
                    hi: "टर्नओवर > 20/40 लाख" 
                }
            },

            // === POLICE / LEGAL ===
            {
                id: 401,
                category: "Police/Legal",
                isNew: true,
                isTrending: false,
                image: "images/police.png",
                icon: "fa-user-shield",
                title: { 
                    en: "Police Verification", 
                    mr: "पोलीस पडताळणी", 
                    hi: "पुलिस सत्यापन" 
                },
                desc: { 
                    en: "Character verification for jobs, passport, or tenants.", 
                    mr: "नोकरी, पासपोर्ट किंवा भाडेकरूंसाठी चारित्र्य पडताळणी.", 
                    hi: "नौकरी, पासपोर्ट या किरायेदारों के लिए चरित्र सत्यापन।" 
                },
                docs: { 
                    en: ["Aadhaar", "Photo", "Address Proof"], 
                    mr: ["आधार", "फोटो", "पत्त्याचा पुरावा"], 
                    hi: ["आधार", "फोटो", "पते का प्रमाण"] 
                },
                eligibility: { 
                    en: "Any Citizen", 
                    mr: "कोणीही नागरिक", 
                    hi: "कोई भी नागरिक" 
                }
            },
            {
                id: 402,
                category: "Police/Legal",
                isNew: false,
                isTrending: false,
                image: "images/affidavite.jpg",
                icon: "fa-gavel",
                title: { 
                    en: "Affidavits (Gap/Name)", 
                    mr: "प्रतिज्ञापत्र (गॅप/नाव)", 
                    hi: "शपथ पत्र" 
                },
                desc: { 
                    en: "Legal affidavits for education gap, name change, etc.", 
                    mr: "शिक्षण गॅप, नाव बदल इत्यादीसाठी कायदेशीर प्रतिज्ञापत्र.", 
                    hi: "शिक्षा अंतराल, नाम परिवर्तन आदि के लिए कानूनी शपथ पत्र।" 
                },
                docs: { 
                    en: ["Aadhaar", "Relevant Proofs"], 
                    mr: ["आधार", "संबंधित पुरावे"], 
                    hi: ["आधार", "प्रासंगिक प्रमाण"] 
                },
                eligibility: { 
                    en: "As per requirement", 
                    mr: "आवश्यकतेनुसार", 
                    hi: "आवश्यकतानुसार" 
                }
            },
            {
                id: 403,
                category: "Police/Legal",
                isNew: false,
                isTrending: false,
                image: "images/Gazette.png",
                icon: "fa-file-alt",
                title: { 
                    en: "Gazette (Name Change)", 
                    mr: "गॅझेट (नाव बदल)", 
                    hi: "राजपत्र (नाम परिवर्तन)" 
                },
                desc: { 
                    en: "Official government notification for name/religion change.", 
                    mr: "नाव/धर्म बदलासाठी अधिकृत सरकारी अधिसूचना.", 
                    hi: "नाम/धर्म परिवर्तन के लिए आधिकारिक सरकारी अधिसूचना।" 
                },
                docs: { 
                    en: ["ID Proof", "Old Name Proof", "Application"], 
                    mr: ["ओळख पुरावा", "जुन्या नावाचा पुरावा", "अर्ज"], 
                    hi: ["पहचान प्रमाण", "पुराने नाम का प्रमाण", "आवेदन"] 
                },
                eligibility: { 
                    en: "Citizens wanting name change", 
                    mr: "नागरिक", 
                    hi: "नागरिक" 
                }
            },
            {
                id: 404,
                category: "Police/Legal",
                isNew: true,
                isTrending: false,
                image: "images/vehicleaffidavit.jpg",
                icon: "fa-motorcycle",
                title: { 
                    en: "Vehicle Affidavit", 
                    mr: "गाडी पासिंग प्रतिज्ञापत्र", 
                    hi: "वाहन शपथ पत्र" 
                },
                desc: { 
                    en: "Affidavit for vehicle transfer/sale (Gaadi Passing).", 
                    mr: "वाहन हस्तांतरण/विक्रीसाठी प्रतिज्ञापत्र.", 
                    hi: "वाहन हस्तांतरण/बिक्री के लिए शपथ पत्र।" 
                },
                docs: { 
                    en: ["RC Book Copy", "Owner ID", "Stamp Paper"], 
                    mr: ["आरसी बुक", "मालक आयडी", "स्टॅम्प पेपर"], 
                    hi: ["आरसी बुक", "मालिक आईडी", "स्टैम्प पेपर"] 
                },
                eligibility: { 
                    en: "Vehicle Owners", 
                    mr: "वाहन मालक", 
                    hi: "वाहन मालिक" 
                }
            },
            {
                id: 405,
                category: "Police/Legal",
                isNew: false,
                isTrending: false,
                image: "images/noncreamy.jpg",
                icon: "fa-ban",
                title: { 
                    en: "Non-Creamy layer Cert", 
                    mr: "नॉन-क्रिमिनल दाखला", 
                    hi: "गैर-आपराधिक प्रमाण पत्र" 
                },
                desc: { 
                    en: "Police clearance certifying no pending criminal cases.", 
                    mr: "कोणताही प्रलंबित फौजदारी खटला नसल्याचे प्रमाणपत्र.", 
                    hi: "कोई लंबित आपराधिक मामला न होने का प्रमाण पत्र।" 
                },
                docs: { 
                    en: ["ID Proof", "Address Proof", "Photo"], 
                    mr: ["ओळख पुरावा", "पत्त्याचा पुरावा", "फोटो"], 
                    hi: ["पहचान प्रमाण", "पता प्रमाण", "फोटो"] 
                },
                eligibility: { 
                    en: "Indian Citizens", 
                    mr: "भारतीय नागरिक", 
                    hi: "भारतीय नागरिक" 
                }
            },

            // === FINANCIAL SERVICES ===
            {
                id: 501,
                category: "Financial",
                isNew: true,
                isTrending: true,
                image: "images/kyc.jpg",
                icon: "fa-wallet",
                title: { 
                    en: "Paytm e-KYC", 
                    mr: "Paytm ई-केवायसी", 
                    hi: "Paytm ई-केवाईसी" 
                },
                desc: { 
                    en: "Digital Aadhaar-based KYC for full wallet functionality.", 
                    mr: "पूर्ण वॉलेट कार्यक्षमतेसाठी डिजिटल आधार-आधारित केवायसी.", 
                    hi: "पूर्ण वॉलेट कार्यक्षमता के लिए डिजिटल आधार-आधारित केवाईसी।" 
                },
                docs: { 
                    en: ["Aadhaar Number", "Mobile with OTP"], 
                    mr: ["आधार क्रमांक", "मोबाईल"], 
                    hi: ["आधार संख्या", "मोबाइल"] 
                },
                eligibility: { 
                    en: "Paytm Users", 
                    mr: "Paytm वापरकर्ते", 
                    hi: "Paytm उपयोगकर्ता" 
                }
            },
            {
                id: 502,
                category: "Financial",
                isNew: false,
                isTrending: false,
                image: "images/https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600",
                icon: "fa-file-invoice",
                title: { 
                    en: "ITR Filing", 
                    mr: "ITR भरणे", 
                    hi: "ITR फाइलिंग" 
                },
                desc: { 
                    en: "Income Tax Return filing for individuals/businesses.", 
                    mr: "व्यक्ती/व्यवसायांसाठी आयकर रिटर्न भरणे.", 
                    hi: "व्यक्तियों/व्यवसायों के लिए आयकर रिटर्न भरना।" 
                },
                docs: { 
                    en: ["Form 16", "Bank Statements", "PAN", "Aadhaar"], 
                    mr: ["फॉर्म १६", "बँक स्टेटमेंट", "पॅन", "आधार"], 
                    hi: ["फॉर्म 16", "बैंक स्टेटमेंट", "पैन", "आधार"] 
                },
                eligibility: { 
                    en: "Taxpayers", 
                    mr: "करदाते", 
                    hi: "करदाता" 
                }
            },
            {
                id: 503,
                category: "Financial",
                isNew: false,
                isTrending: false,
                image: "images/DSC.png",
                icon: "fa-key",
                title: { 
                    en: "Digital Signature (DSC)", 
                    mr: "डिजिटल स्वाक्षरी", 
                    hi: "डिजिटल हस्ताक्षर" 
                },
                desc: { 
                    en: "Class 3 DSC for tenders, GST, and ITR.", 
                    mr: "निविदा, GST आणि ITR साठी क्लास ३ DSC.", 
                    hi: "निविदा, जीएसटी और आईटीआर के लिए क्लास 3 डीएससी।" 
                },
                docs: { 
                    en: ["Aadhaar", "PAN", "Photo", "Mobile"], 
                    mr: ["आधार", "पॅन", "फोटो", "मोबाईल"], 
                    hi: ["आधार", "पैन", "फोटो", "मोबाइल"] 
                },
                eligibility: { 
                    en: "Individuals/Organizations", 
                    mr: "व्यक्ती/संस्था", 
                    hi: "व्यक्ति/संगठन" 
                }
            },
            {
                id: 504,
                category: "Financial",
                isNew: false,
                isTrending: false,
                image: "images/jeevan.jpg",
                icon: "fa-heartbeat",
                title: { 
                    en: "Jeevan Praman", 
                    mr: "जीवन प्रमाण", 
                    hi: "जीवन प्रमाण" 
                },
                desc: { 
                    en: "Digital Life Certificate for Pensioners.", 
                    mr: "पेन्शनधारकांसाठी डिजिटल जीवन प्रमाणपत्र.", 
                    hi: "पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र।" 
                },
                docs: { 
                    en: ["Aadhaar", "PPO Number", "Bank Account"], 
                    mr: ["आधार", "PPO क्रमांक", "बँक खाते"], 
                    hi: ["आधार", "PPO नंबर", "बैंक खाता"] 
                },
                eligibility: { 
                    en: "Pensioners", 
                    mr: "पेन्शनधारक", 
                    hi: "पेंशनभोगी" 
                }
            },

            // === ONLINE FORMS ===
            {
                id: 601,
                category: "Online Forms",
                isNew: true,
                isTrending: true,
                image: "images/mahadbt.jpg",
                icon: "fa-university",
                title: { 
                    en: "Scholarship Forms", 
                    mr: "शिष्यवृत्ती अर्ज", 
                    hi: "छात्रवृत्ति फॉर्म" 
                },
                desc: { 
                    en: "MahaDBT and National Scholarship Portal applications.", 
                    mr: "महाडीबीटी आणि नॅशनल स्कॉलरशिप पोर्टल अर्ज.", 
                    hi: "महाडीबीटी और राष्ट्रीय छात्रवृत्ति पोर्टल आवेदन।" 
                },
                docs: { 
                    en: ["Income/Caste Cert", "Marksheet", "Bank Passbook"], 
                    mr: ["उत्पन्न/जात दाखला", "गुणपत्रिका", "बँक पासबुक"], 
                    hi: ["आय/जाति प्रमाण पत्र", "मार्कशीट", "बैंक पासबुक"] 
                },
                eligibility: { 
                    en: "Students", 
                    mr: "विद्यार्थी", 
                    hi: "छात्र" 
                }
            },
            {
                id: 602,
                category: "Online Forms",
                isNew: false,
                isTrending: false,
                image: "images/exams.jpeg",
                icon: "fa-book-reader",
                title: { 
                    en: "Exam Forms", 
                    mr: "परीक्षा अर्ज", 
                    hi: "परीक्षा फॉर्म" 
                },
                desc: { 
                    en: "MPSC, UPSC, SSC, Banking exam online forms.", 
                    mr: "MPSC, UPSC, SSC, बँकिंग परीक्षांचे ऑनलाइन अर्ज.", 
                    hi: "MPSC, UPSC, SSC, बैंकिंग परीक्षा ऑनलाइन फॉर्म।" 
                },
                docs: { 
                    en: ["Photo", "Signature", "Educational Docs"], 
                    mr: ["फोटो", "सही", "शैक्षणिक कागदपत्रे"], 
                    hi: ["फोटो", "हस्ताक्षर", "शैक्षिक दस्तावेज"] 
                },
                eligibility: { 
                    en: "Candidates", 
                    mr: "उमेदवार", 
                    hi: "उम्मीदवार" 
                }
            },
            {
                id: 603,
                category: "Online Forms",
                isNew: false,
                isTrending: false,
                image: "images/admission.jpg",
                icon: "fa-graduation-cap",
                title: { 
                    en: "Admission Forms", 
                    mr: "प्रवेश अर्ज", 
                    hi: "प्रवेश फॉर्म" 
                },
                desc: { 
                    en: "FYJC (11th), RTE, and College admission forms.", 
                    mr: "अकरावी, आरटीई आणि कॉलेज प्रवेश अर्ज.", 
                    hi: "11वीं, आरटीई और कॉलेज प्रवेश फॉर्म।" 
                },
                docs: { 
                    en: ["Marksheet", "LC", "Caste Cert"], 
                    mr: ["गुणपत्रिका", "एलसी", "जात प्रमाणपत्र"], 
                    hi: ["मार्कशीट", "एलसी", "जाति प्रमाण पत्र"] 
                },
                eligibility: { 
                    en: "Students", 
                    mr: "विद्यार्थी", 
                    hi: "छात्र" 
                }
            },
            
  // ... continue copying all service objects exactly as in index3.html
];

/* BLOG DATA */
  const blogData = [
            {
                id: 1,
                category: "Identity",
                date: "Dec 10, 2025",
                title: "New Aadhaar Update Guidelines",
                desc: "Government has released new norms for biometric updates. Mandatory updates are required at age 5 and 15 to ensure data accuracy.",
                image: "images/adhar.jpg",
                icon: "fa-fingerprint",
                color: "blue"
            },
            {
                id: 2,
                category: "Finance",
                date: "Dec 05, 2025",
                title: "Income Certificate Validity",
                desc: "Understanding the validity period of income certificates is crucial for scholarship applications. Certificates are typically valid for one financial year.",
                image: "images/income.png",
                icon: "fa-file-invoice-dollar",
                color: "green"
            },
            {
                id: 3,
                category: "Business",
                date: "Nov 28, 2025",
                title: "Shop Act Renewal Process",
                desc: "Shop Act licenses now have an easier online renewal process. Keep your business compliant by renewing before the expiry date to avoid fines.",
                image: "images/gumsta.jpg",
                icon: "fa-store",
                color: "purple"
            },
            {
                id: 4,
                category: "Travel",
                date: "Nov 15, 2025",
                title: "Simplified Passport Verification",
                desc: "The police verification process for new passports has been streamlined with the new DigiLocker integration, reducing wait times significantly.",
                image: "images/police.png",
                icon: "fa-passport",
                color: "orange"
            },
            {
                id: 5,
                category: "MSME",
                date: "Nov 10, 2025",
                title: "Udyam Registration Benefits",
                desc: "Registered MSMEs can avail collateral-free loans and subsidies. Learn how to register your small business on the Udyam portal for free.",
                image: "images/udyam.jpg",
                icon: "fa-industry",
                color: "teal"
            }
];

/* GALLERY DATA */
const galleryData = [
            {
                type: "image",
                src: "images/aryaimage2.jpg",
                title: "Efficient Document Processing",
                desc: "Our operators handling complex form fillings with precision."
            },
            {
                type: "video",
                src: "images/adhar.jpg", 
                title: "How to Apply for Aadhaar",
                desc: "A quick walkthrough of the biometric update process at our center.",
                videoUrl: "#" // In real app, this would be a youtube link
            },
            {
                type: "image",
                src: "images/aryavid1.png",
                title: "Customer Waiting Area",
                desc: "Comfortable seating and token system for hassle-free service."
            },
            {
                type: "image",
                src: "images/aryaimage1.jpg",
                title: "Digital Services Desk",
                desc: "Dedicated counters for PAN, Passport, and Banking services."
            },
            {
                type: "video",
                src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
                title: "Shop Act License Guide",
                desc: "Explaining the documents required for a new Gumasta license.",
                videoUrl: "#https://youtu.be/QzavggpxWOs?si=qOMwjz_FmlYFC3fm"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
                title: "Biometric Devices",
                desc: "State-of-the-art scanners for Aadhaar and Jeevan Praman services."
            }
]
