<!-- DOCUMENT READY --> 
$(document).ready(function () {


// FLIPCARDS - EMPLOYEE TRAINING

$('#fc-et').flipcard({
	trigger: 'click',
    "cards": [{
      "front": "<img alt='Insert Img Alt Text Pls' src='../../images/shutterstock_533928487.jpg'/>",
      "back": "<p>Business owners have a legal responsibility to keep your business and customer information safe. Employees can be the first and last line of defence against cyber threats Employees make mistakes, so having a cyber security training program is vital.</p>"
    }, {
      "front": "<img alt='Insert Img Alt Text Pls' src='../../images/shutterstock_761152645.jpg'/>",
      "back": "<p>Cyber security is continuously evolving. Regular cyber security awareness and training keeps everybody up to date. This could be the difference between whether or not a criminal accesses the businesses' money or data.</p>"
    }, {
      "front": "<img alt='Insert Img Alt Text Pls' src='../../images/shutterstock_425235997.jpg'/>",
      "back": "<p><strong>Quick wins</strong></p> <ul> <li>Incorporate, update, and regularly repeat.</li> <li>Create a cyber security incident response plan.</li> <li>Reward employees who find threats.</li> <li>Create a cyber security culture.</li> </ul>"
    }]
  });
	
	
// SELF CHECK - 3297
    
$("#sc-3297").quiz({
    "questions": [
        {
            "question": "\n1.\tFor most people the passphrase \"5paghetti!95\" is...................? Choose the correct response.",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tEasy to remember "
                },
                {
                    "answer": "b)\tSomewhat easy to remember ",
                    "correct": true
                },
                {
                    "answer": "c)\tVery difficult to remember"
                }
            ]
        },
        {
            "question": "2.\tWhich of the following reasons is why you should do software updates?",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tAllows better access from outside to network for any person  "
                },
                {
                    "answer": "b)\tEnhanced features and efficiencies for programs and apps ",
                    "correct": true
                },
                {
                    "answer": "c)\tGives full administration to any user on the domain"
                }
            ]
        },
        {
            "question": "3.\tACSC is an acronym for the.......................? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": " Australian Cyber Security Centre ",
                    "correct": true
                },
                {
                    "answer": " Australasian Cyber Security Centre "
                },
                {
                    "answer": " Australian Cyber Security Community"
                }
            ]
        }
    ],
    "title": "Cyber security for business"
});
    
    
// CAROUSEL - PROTECT THE INTERNET CONNECTION 

$('.carousel').carousel({
        pause: true,
        interval: false
    });
  var container = $(".slider-extra-content-container")
  var slider = $('.carousel.slide.slider-extra-content')
  var screenReader = $("<div aria-live='assertive' class='sr-only' id='slide-screen-reader'>")
  var current = 0;
  $(".carousel-control").attr('aria-labelledby', 'slide-screen-reader')
  screenReader.insertBefore(slider)
  container.children().hide()
  container.each(function(i) {
      $('.slider-extra-content').find(".carousel-caption").hide()
    $(this).children().first().show()
    $(this).children().each(function(x) {
      $(this).attr('data-num', x)
    })
  })
  slider.each(function(i) {
    $(this).attr('data-num', i)
    $(this).find(".carousel-inner").children().each(function(x) {
      $(this).attr('data-num', x)
    })
  })
  slider.on('slide.bs.carousel', function(e) {
    current = $(e.relatedTarget).data("num");
    container.eq($(this).data("num")).children().hide()
    container.eq($(this).data("num")).children().eq(current).show()
    screenReader.html(container.eq($(this).data("num")).children().eq(current).html())
  })
  $(".left.carousel-control").focus(function() {
    screenReader.text("Focused on left button, click to go to previous slide.")
  })
  $(".right.carousel-control").focus(function() {
    screenReader.text("Focused on right button, click to go to next slide.")
  })
    
    
// SELF CHECK - 3298
    
$("#sc-3298").quiz({
    "questions": [
        {
            "question": "1.\tOne of the precautions when accessing the internet at a public Wi-Fi location, is to...............................? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tDisable to firewall to allow easier access  "
                },
                {
                    "answer": "b)\tMake sure no one can see your screen  "
                },
                {
                    "answer": "c)\tEnsure the phone, tablet or laptop has a reputable anti-virus installed",
                    "correct": true
                }
            ]
        },
        {
            "question": "2.\tOne way for staff to protect themselves from malicious emails, is that the staff should not............................? Choose correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tbe suspicious of messages that aren’t addressed directly to the staff member  "
                },
                {
                    "answer": "b)\tthink carefully before clicking on links or opening attachments  "
                },
                {
                    "answer": "c)\topen messages if you don’t know the sender",
                    "correct": true
                }
            ]
        },
        {
            "question": "3.\tWSUS is an acronym for? Choose the correct response: ",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tWindows System Update Services "
                },
                {
                    "answer": " b)\tWindows Server Update Services  ",
                    "correct": true
                },
                {
                    "answer": "c)\tWally Smith Uber Service"
                }
            ]
        }
    ],
    "title": "Securing business tools"
});
    
    
// SELF CHECK - 3299    
    
$("#sc-3299").quiz({
    "questions": [
        {
            "question": "1.\tWhen should you NOT use ReportCyber? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tYou have been deceived into sending money or goods to someone online."
                },
                {
                    "answer": " b)\tSomeone is bullying, harassing, or stalking you online.  "
                },
                {
                    "answer": "c)\tYou have received a scam call and no loss of personal information or money has occurred.",
                    "correct": true
                }
            ]
        },
        {
            "question": "2.\tWhat is one of the reasons you would perform backups in a business? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tNo reason, just everyone tells you that you have to do it. "
                },
                {
                    "answer": " b)\tOffers peace of mind and makes it faster and easier to get up and running again. ",
                    "correct": true
                },
                {
                    "answer": "c)\tAllows employment of an IT technician"
                }
            ]
        },
        {
            "question": "3.\tWhich one of the following would not be part of a backup policy? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tHow much should be spent on backup media. ",
                    "correct": true
                },
                {
                    "answer": " b)\tThe frequency of backups. "
                },
                {
                    "answer": "c)\tWhere backups should be stored."
                }
            ]
        }
    ],
    "title": "Business recovery"
});
    

// SELF CHECK - 3300
    
$("#sc-3300").quiz({
    "questions": [
        {
            "question": "The Strategies to Mitigate Cyber Security Incidents – Mitigation Details document provided by ACSC helps organisations mitigate cyber security incidents caused by which two (2) list below? Choose two correct responses:",
            "type": "tick",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tRansomware denying access to data for monetary gain. ",
                    "correct": true
                },
                {
                    "answer": "b)\tJunk emails from their competitors. "
                },
                {
                    "answer": " c)\tCorrupt software updates. "
                },
                {
                    "answer": "d)\tMalicious insiders who destroy data ",
                    "correct": true
                }
            ]
        },
        {
            "question": "2.\tThe ACSC does not offer which Critical Infrastructure support through? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tTechnical expertise in Information and Operational Technologies "
                },
                {
                    "answer": "b)\tPrinciples-based advice tailored toward high-risk environments "
                },
                {
                    "answer": "c)\tAustralian Computer Society ",
                    "correct": true
                }
            ]
        },
        {
            "question": "3.\tThe acronym for ISM stand for.................? Choose the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tInformation Systems Manual. "
                },
                {
                    "answer": " b)\tInformation Security Manual. ",
                    "correct": true
                },
                {
                    "answer": "c) Infrastructure Security Manual."
                }
            ]
        }
    ],
    "title": "Cyber security large organisations"
});
    
    
// SELF CHECK - 3315
    

$("#sc-3315").quiz({
    "questions": [
        {
            "question": "In what year was the Privacy Act enacted",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\t1984 "
                },
                {
                    "answer": "b)\t1988 ",
                    "correct": true
                },
                {
                    "answer": "c)\t1996"
                }
            ]
        },
        {
            "question": "The Queensland Information Privacy Act 2009 covers all businesses in Queensland",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True"
                },
                {
                    "answer": "False",
                    "correct": true
                }
            ]
        },
        {
            "question": "What ISO 27001 standard includes the appraisal and management of information security risks: ",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) ISO/IEC 27001:2013  ",
                    "correct": true
                },
                {
                    "answer": "b) ISO/IEC 27001:2015  "
                },
                {
                    "answer": "c) ISO/IEC 27002:2013"
                }
            ]
        }
    ],
    "title": "Legislation standards and policies"
});	
    
    
// SELF CHECK - 3325
    
$("#sc-3325").quiz({
    "questions": [
        {
            "question": "1.\tThe Privacy Act allows an individual to................? Select the correct response:\n\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\thave the option of not identifying yourself, or of using a pseudonym in certain circumstances "
                },
                {
                    "answer": "b)\task for access to your personal information (including your health information) "
                },
                {
                    "answer": "c)\tstop receiving unwanted direct marketing "
                },
                {
                    "answer": "d)\tall the above",
                    "correct": true
                }
            ]
        },
        {
            "question": "2.\tA Privacy Policy could also be known as a Responsible Use of Data Policy",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "3.\tThe Office of the Australian Information Commissioner has released a guide for securing personal information called?",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tGuide to securing personal information - ‘Reasonable steps’ to protect personal information”",
                    "correct": true
                },
                {
                    "answer": " b)\tGuide to securing personal information - ‘The step-by-step to protect personal information” "
                },
                {
                    "answer": " c)\tGuide to securing personal information - ‘Nearly all steps’ to protect personal information”"
                }
            ]
        }
    ],
    "title": "Company policies"
});
    
    
// SELF CHECK - 3324 
    
$("#sc-3324").quiz({
    "questions": [
        {
            "question": "1.\tThe Privacy Act allows an individual to..........(Select the correct response):",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\thave the option of not identifying yourself, or of using a pseudonym in certain circumstances "
                },
                {
                    "answer": "b)\task for access to your personal information (including your health information) "
                },
                {
                    "answer": "c)\tstop receiving unwanted direct marketing "
                },
                {
                    "answer": "d)\tall the above",
                    "correct": true
                }
            ]
        },
        {
            "question": "2.\tTypes of personal information can include ‘health information’, ‘credit information’, and ‘tax file number information’.",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "3.\tWhich one of the following is defined in the Privacy Act as sensitive information?",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) Sports club membership"
                },
                {
                    "answer": " b) Racial or ethnic origin  ",
                    "correct": true
                },
                {
                    "answer": "c) Opinion of the best NRL team"
                }
            ]
        }
    ],
    "title": "Data"
});
    
    
// SELF CHECK - 3323
    
$("#sc-3323").quiz({
    "questions": [
        {
            "question": "1.\tUnder APP 11.2, APP entities must also take reasonable steps to destroy or de-identify the personal information they hold once it is no longer needed:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "2.\tUnder APP 3, you should only collect personal information that is reasonably necessary to carry out your functions or activities.",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "3.\tWhich one of the following true in regard to emailing sensitive information?",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) Use non-encryption messaging for speed and accuracy"
                },
                {
                    "answer": "b) Obtain a recipient’s consent to send their own personal information to them via email",
                    "correct": true
                },
                {
                    "answer": "c) Send the email addressed to the recipient and resend the unencrypted email if unsuccessful"
                }
            ]
        }
    ],
    "title": "Sending and receiving sensitive data"
});
    
    
// SELF CHECK - 3322
    
$("#sc-3322").quiz({
    "questions": [
        {
            "question": "3 options for file storage are onsite storage, cloud storage, or a mixture of both:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "2.\tWhich of the following is not a file storage area?\n\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tHDD "
                },
                {
                    "answer": "b)\tNAS "
                },
                {
                    "answer": "c)\tNVMe ",
                    "correct": true
                },
                {
                    "answer": "d)\tCloud"
                }
            ]
        },
        {
            "question": "Which one of the following is not a cloud service?\n\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) Amazon Web Service "
                },
                {
                    "answer": "b) Cumulus cloud ",
                    "correct": true
                },
                {
                    "answer": "c) Azure Cloud"
                }
            ]
        }
    ],
    "title": "File location"
});
    
    
// FLIPCARDS - AODI    
    
$('#fc-aodi').flipcard({
	trigger: 'click',
    "cards": [{
      "front": "<p><strong>Types of attacks</strong></p>",
      "back": "<p>Over time, data has been evolving in the way it is see in the domain of cyber security.</p>"
    }, {
      "front": "<p><strong>Data availability</strong></p>",
      "back": "<p>When data become easily available it went through the first type of attacks by malware and distributed denial of service (DDOS). Malware has a history preventing access to data, while DDOS attacks the bandwidth or resources of a targeted system.</p>"
    },{
      "front": "<p><strong>Data confidentiality</strong></p>",
      "back": "<p>Cyber threats to data confidentiality are characterised as data theft.</p>"
    }, {
      "front": "<p><strong>Data integrity</strong></p>",
      "back": "<p>This type of data integrity attacks does not deny you access like malware, or steal your data, but they do compromise the integrity of your data concerning accuracy and reliability.</p>"
    }]
  })
    

// SELF CHECK - 3321
    
$("#sc-3321").quiz({
    "questions": [
        {
            "question": "Which of the following is not a hashing algorithm? Select the correct response:\n\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tMD5",
                    "correct": true
                },
                {
                    "answer": " b)\tPC-7 "
                },
                {
                    "answer": "c)\tSHA "
                },
                {
                    "answer": "d)\tHMAC"
                }
            ]
        },
        {
            "question": "2.\tIf laptop is stolen, or maybe lost, and the files or hard drive is not encrypted, anyone can access any sensitive information.",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "Two-factor authentication (2FA) is where you will logon to a system, or gain access to an application, using two forms of verification. The first factor is something you know, such as your password and the other is something you have, which is.......? Select the correct response:",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) An asset such as a car or house"
                },
                {
                    "answer": " b) A device such as a mobile phone ",
                    "correct": true
                },
                {
                    "answer": "c) Knowledge, such as training or experience"
                }
            ]
        }
    ],
    "title": "Data integrity and authorised access"
});
    
    
// SELF CHECK - 3320
    
$("#sc-3320").quiz({
    "questions": [
        {
            "question": "Which of the following two (2) devices must be physically destroyed if they hold sensitive data? ",
            "type": "tick",
            "feedback": {},
            "answers": [
                {
                    "answer": "a)\tHDD",
                    "correct": true
                },
                {
                    "answer": " b)\tSATA cable "
                },
                {
                    "answer": "c)\tDVD ",
                    "correct": true
                },
                {
                    "answer": "d)\tProjector"
                }
            ]
        },
        {
            "question": "2.\tAll Queensland Government agencies must obtain authorisation from the State Archivist when destroying data.\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "True",
                    "correct": true
                },
                {
                    "answer": "False"
                }
            ]
        },
        {
            "question": "The ‘reasonable steps’ an organisation should take to destroy sensitive data depend upon circumstances that include? Select the correct response.\n\n",
            "type": "multi",
            "feedback": {},
            "answers": [
                {
                    "answer": "a) the amount and sensitivity of the personal information ",
                    "correct": true
                },
                {
                    "answer": "b) the time available to destroy the sensitive data authorisation from shareholders"
                },
                {
                    "answer": "c) authorisation from shareholders"
                }
            ]
        }
    ],
    "title": "Destruction of data"
});
    
	
 /* END DOC READY */
});
	
	