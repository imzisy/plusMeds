APP.constant('drugsData', {
  stop: [
    // Section A
    {
      "Section": "Section A: Drug indication criteria",
      "terms": [],
      "id": "A1",
      "text": "Any drug prescribed without an evidence-based clinical indication.",
    }, {
      "Section": "Section A: Drug indication criteria",
      "terms": [],
      "id": "A2",
      "text": "Any drug prescribed beyond the recommended duration, where treatment duration is well defined.",
    }, {
      "Section": "Section A: Drug indication criteria",
      "terms": [],
      "id": "A3",
      "text": "Any duplicate drug class prescription.",
      "reasone": "optimisation of monotherapy within a single drug class should be observed prior to considering a new agent.",
      "references": ["Olsson J, Bergman A, Carlsten A, Oké T, Bernsten C, Schmidt IK, Fastbom J. Quality of drug prescribing in elderly people in nursing homes and special care units for dementia: a cross-sectional computerized pharmacy register analysis. Clin Drug Investig 2010; 30(5): 289-300. PubMed PMID: 20384385.",
        "Martin BC, Wiley-Exley EK, Richards S, Domino ME, Carey TS, Sleath BL. Contrasting measures of adherence with simple drug use, medication switching, and therapeutic duplication. Ann Pharmacother 2009; 43(1): 36-44. PubMed PMID: 19126828.",
        "Laurier C, Moride Y, Kennedy WA. Health survey data on potentially inappropriate geriatric drug use. Ann Pharmacother 2002; 36(3): 404-9. PubMed PMID: 11895051."
      ]
    },

    // Section B
    {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Digoxin", "heart failure"],
      "id": "B1",
      "text": "Digoxin for heart failure with preserved systolic ventricular function.",
      "reasone": "no clear evidence of benefit.",
      "references": ["Jessup M, Abraham WT, Casey DE, Feldman AM, Francis GS, Ganiats TG, Konstam MA, Mancini DM, Rahko PS, Silver MA, Stevenson LW, Yancy CW. 2009 focused update: ACCF/AHA Guidelines for the Diagnosis and Management of Heart Failure in Adults:a report of the American College of Cardiology Foundation/American Heart Association Task Force on Practice Guidelines: developed in collaboration with the International Society for Heart and Lung Transplantation. Circulation 2009; 119(14): 1977-2016. PubMed PMID: 19324967.", "Cheng JW, Nayar M. A review of heart failure management in the elderly population.  Am J Geriatr Pharmacother 2009; 7(5): 233-49. Review. PubMed PMID: 19948300."]
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Verapamil", "diltiazem", "heart failure"],
      "reasone": "may worsen heart failure.",
      "text": "Verapamil or diltiazem with NYHA Class III or IV heart failure.",
      "id": "B2",
      "references": ["Amabile CM, Spencer AP. Keeping your patient with heart failure safe: a review of potentially dangerous medications. Arch Intern Med 2004; 164(7): 709-20. Review. PubMed PMID:15078640.",
        "Opie LH, Yusuf S, Kübler W. Current status of safety and efficacy of calcium channel blockers in cardiovascular diseases: a critical analysis based on 100 studies. Prog Cardiovasc Dis 2000; 43(2): 171-96. Review. PubMed PMID:11014332."
      ]
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Beta-blocker", "verapamil", "diltiazem", "Propranolol", "Bucindolol", "Carteolol", "Carvedilol", "Labetalol", "Nadolol", "Oxprenolol", "Penbutolol", "Pindolol", "Sotalol", "Acebutolol", "Atenolol", "Betaxolol", "Bisoprolol", "Celiprolol", "Esmolol", "Metoprolol", "Nebivolol"],
      "reasone": "risk of heart block.",
      "id": "B3",
      "text": "Beta-blocker in combination with verapamil or diltiazem.",
      "references": ["Lee DW, Cohan B. Refractory cardiogenic shock and complete heart block after verapamil SR and metoprolol treatment. A case report. Angiology 1995; 46(6): 517-9. Review. PubMed PMID: 7785794.",
        "Edoute Y, Nagachandran P, Svirski B, Ben-Ami H. Cardiovascular adverse drug reaction associated vbwith combined beta-adrenergic and calcium entry-blocking agents. J Cardiovasc Pharmacol 2000; 35(4): 556-9. PubMed PMID: 10774785."
      ],
      "exp": {
        "Beta-blocker": "Propranolol, Bucindolol, Carteolol, Carvedilol, Labetalol, Nadolol, Oxprenolol, Penbutolol, Pindolol, Sotalol, Acebutolol, Atenolol, Betaxolol, Bisoprolol, Celiprolol, Esmolol, Metoprolol, Nebivolol"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Beta-blocker", "symptomatic bradycardia (< 50/min), type II heart block or complete heart block.", "Propranolol", " Bucindolol", " Carteolol", " Carvedilol", " Labetalol", " Nadolol", " Oxprenolol", " Penbutolol", " Pindolol", " Sotalol", " Acebutolol", " Atenolol", " Betaxolol", " Bisoprolol", " Celiprolol", " Esmolol", " Metoprolol", " Nebivolol"],
      "reasone": "risk of complete heart block, asystole.",
      "id": "B4",
      "text": "Beta blocker with bradycardia (< 50 b/min), type II heart block or complete heart block.",
      "references": ["British National Formulary, No. 61, March 2011, p97."],
      "exp": {
        "Beta blocker": "Propranolol, Bucindolol, Carteolol, Carvedilol, Labetalol, Nadolol, Oxprenolol, Penbutolol, Pindolol, Sotalol, Acebutolol, Atenolol, Betaxolol, Bisoprolol, Celiprolol, Esmolol, Metoprolol, Nebivolol"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Amiodarone", "supraventricular tachyarrhythmias"],
      "reasone": "higher risk of side-effects than beta-blockers, digoxin, verapamil or diltiazem.",
      "id": "B5",
      "text": "Amiodarone as first-line antiarrhythmic therapy in supraventricular tachyarrhythmias.",
      "references": ["Lafuente-Lafuente C, Mouly S, Longás-Tejero MA, Mahé I, Bergmann JF. Antiarrhythmic drugs for maintaining sinus rhythm after cardioversion of atrial fibrillation: a systematic review of randomized controlled trials. Arch Intern Med 2006; 166(7):719-28. Review. PubMed PMID: 16606807.",
        "Piccini JP, Berger JS, O'Connor CM. Amiodarone for the prevention of sudden cardiac death: a meta-analysis of randomized controlled trials. Eur Heart J 2009; 30(10):1245-53. Review. PubMed PMID: 19336434."
      ]
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Loop diuretic", "hypertension", "Furosemide", " Bumetanide", " Ethacrynic acid", " Torsemide"],
      "reasone": "lack of outcome data for this indication; safer, more effective alternatives available.",
      "id": "B6",
      "text": "Loop diuretic as first-line treatment for hypertension.",
      "references": ["Sica DA, Carter B, Cushman W, Hamm L. Thiazide and loop diuretics. J Clin Hypertens (Greenwich) 2011; 13(9): 639-43. Review. PubMed PMID: 21896142.",
        "Williams B, Poulter NR, Brown MJ, Davis M, McInnes GT, Potter JF, Sever PS, Thom SM; BHS guidelines working party, for the British Hypertension Society. British Hypertension Society guidelines for hypertension management 2004(BHS-IV): summary. BMJ 2004; 328(7440):634-40. Erratum in: BMJ 2004; 328(7445):926. PubMed PMID: 15016698."
      ],
      "exp": {
        "Loop diuretic": "Furosemide, Bumetanide, Ethacrynic acid, Torsemide"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Loop diuretic", "dependent ankle oedema", "Furosemide", " Bumetanide", " Ethacrynic acid", " Torsemide"],
      "id": "B7",
      "reasone": "leg elevation and /or compression hosiery usually more appropriate.",
      "text": "Loop diuretic for dependent ankle oedema without clinical, biochemical evidence or radiological evidence of heart failure, liver failure, nephrotic syndrome or renal failure.",
      "references": ["Wehling M. Morbus diureticus in the elderly: epidemic overuse of a widely applied group of drugs. J Am Med Dir Assoc 2013; 14(6): 437-42. Review. PubMed PMID: 23510827.",
        "Sarafidis PA, Georgianos PI, Lasaridis AN. Diuretics in clinical practice. Part I: mechanisms of action, pharmacological effects and clinical indications of diuretic compounds. Expert Opin Drug Saf 2010; 9(2):243-57. Review. PubMed PMID: 20095917."
      ],
      "exp": {
        "Loop diuretic": "Furosemide, Bumetanide, Ethacrynic acid, Torsemide"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Thiazide diuretic", "Hydrochlorothiazide", "Bendroflumethiazide", "Hydroflumethiazide", "Polythiazide", "Methyclothiazide", "hypokalaemia", "hyponatraemia", "hypercalcaemia"],
      "reasone": "hypokalaemia, hyponatraemia, hypercalcaemia and gout can be precipitated by thiazide diuretic.",
      "id": "B8",
      "text": "Thiazide diuretic with current significant hypokalaemia (i.e. serum K+ < 3.0 mmol/l), hyponatraemia (i.e. serum Na+ < 130 mmol/l) hypercalcaemia (i.e. corrected serum calcium > 2.65 mmol/l) or with a history of gout.",
      "references": ["(i).Sica DA, Carter B, Cushman W, Hamm L. Thiazide and loop diuretics. J Clin Hypertens (Greenwich) 2011; 13(9):639-43. Review. PubMed PMID: 21896142.",
        "Gurwitz JH, Kalish SC, Bohn RL, Glynn RJ, Monane M, Mogun H, Avorn J. Thiazide diuretics and the initiation of anti-gout therapy. J ClinEpidemiol1997; 50(8): 953-9. PubMed PMID: 9291881."
      ],
      "exp": {
        "Thiazide diuretic": "Hydrochlorothiazide, Bendroflumethiazide, Hydroflumethiazide, Polythiazide, Methyclothiazide"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Loop diuretic", "Furosemide", " Bumetanide", " Ethacrynic acid", " Torsemide", "urinary incontinence."],
      "reasone": "may exacerbate incontinence.",
      "id": "B9",
      "text": "Loop diuretic for treatment of hypertension with concurrent urinary incontinence.",
      "references": ["Ekundayo OJ. The association between overactive bladder and diuretic use in the elderly. Curr Urol Rep 2009; 10(6):434-40. Review. PubMed PMID: 19863854.",
        "Ekundayo OJ, Markland A, Lefante C, Sui X, Goode PS, Allman RM, Ali M, Wahle C, Thornton PL, Ahmed A. Association of diuretic use and overactive bladder syndrome in older adults: a propensity score analysis. Arch Gerontol Geriatr2009; 49(1):64-8. PubMed PMID: 18752858.",
        "Finkelstein MM. Medical conditions, medications, and urinary incontinence. Analysis of a population-based survey. Can Fam Physician 2002; 48:96-101.PubMed PMID: 11852617."
      ],
      "exp": {
        "Loop diuretic": "Furosemide, Bumetanide, Ethacrynic acid, Torsemide"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Centrally-acting antihypertensives", "methyldopa", " clonidine", " moxonidine", " rilmenidine", " guanfacine", " guanabenz", " Lofexidine"],
      "reasone": "centrally-active antihypertensives are generally less well tolerated by older people than younger people.",
      "id": "B10",
      "text": "Centrally-acting antihypertensives unless clear intolerance of, or lack of efficacy with, other classes of antihypertensives.",
      "references": ["B10 (i). Potter JF. Hypertension. In: Brocklehurst’s Textbook of Geriatric Medicine & Gerontology, 6th edition, Churchill Livingstone, 2003, p403.",
        "Khindri S, Jackson S. Hypertension. In: Prescribing for Elderly Patients, S. Jackson, P. Jansen, A. Mangoni, eds., Wiley-Blackwell, Chichester, UK, 2009, pp97-98."
      ],
      "exp": {
        "Centrally-acting antihypertensives": "methyldopa, clonidine, moxonidine, rilmenidine, guanfacine, guanabenz, Lofexidine"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["ACE inhibitors", "Angiotensin Receptor Blockers", "hyperkalaemia.", "Captopril", " Zofenopril", " Enalapril", " Ramipril", " Quinapril", " Perindopril", " Lisinopril", " Benazepril", " Imidapril", " Trandolapril", " Cilazapril", " Fosinopril", " Moexipril", " Trandopril", "Azilsartan", " candesartan", " eprosartan", " irbesartan", " losartan", " olmesartan", " telmisartan", " valsartan", " eprosartan"],
      "id": "B11",
      "text": "ACE inhibitors or Angiotensin Receptor Blockers in patients with hyperkalaemia.",
      "references": ["Izzo JL Jr, Weir MR. Angiotensin-converting enzyme inhibitors. J Clin Hypertens (Greenwich) 2011; 13(9):667-75. Review. PubMed PMID: 21896148.",
        "Desai AS, Swedberg K, McMurray JJ, Granger CB, Yusuf S, Young JB, Dunlap ME, Solomon SD, Hainer JW, Olofsson B, Michelson EL, Pfeffer MA; CHARM Program Investigators. Incidence and predictors of hyperkalemia in patients with heart failure: an analysis of the CHARM Program. J Am Coll Cardiol 2007 Nov 13;50(20):1959-66. PubMed PMID: 17996561.",
        "Reardon LC, Macpherson DS. Hyperkalemia in outpatients using angiotensin-converting enzyme inhibitors. How much should we worry? Arch Intern Med 1998; 158(1):26-32. PubMed PMID: 9437375."
      ],
      "exp": {
        "ACE inhibitors": "Captopril, Zofenopril, Enalapril, Ramipril, Quinapril, Perindopril, Lisinopril, Benazepril, Imidapril, Trandolapril, Cilazapril, Fosinopril, Moexipril, Trandopril",
        "Angiotensin Receptor Blockers": "Azilsartan, candesartan, eprosartan, irbesartan, losartan, olmesartan, telmisartan, valsartan, eprosartan"
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Aldosterone antagonists", "potassium-conserving drugs", "ACE inhibitors", "Angiotensin Receptor Blockers", "amiloride", " triamterene", "spironolactone", " eplerenone", "Captopril", " Zofenopril", " Enalapril", " Ramipril", " Quinapril", " Perindopril", " Lisinopril", " Benazepril", " Imidapril", " Trandolapril", " Cilazapril", " Fosinopril", " Moexipril", " Trandopril", "Azilsartan", " candesartan", " eprosartan", " irbesartan", " losartan", " olmesartan", " telmisartan", " valsartan", " eprosartan"],
      "reasone": "risk of dangerous hyperkalaemia i.e. > 6.0 mmol/l – serum K should be monitored regularly, i.e. at least every 6 months.",
      "id": "B12",
      "text": "Aldosterone antagonists with concurrent potassium-conserving drugs (e.g. ACE inhibitors or Angiotensin Receptor Blockers, amiloride, triamterene) without monitoring of serum potassium.",
      "references": ["Bauersachs J, Fraccarollo D. Aldosterone antagonism in addition to angiotensin-converting enzyme inhibitors in heart. Minerva Cardioangiol 2003; 51(2):155-64. Review. PubMed PMID: 12783071.",
        "Poggio R, Grancelli HO, Miriuka SG. Understanding the risk of hyperkalaemia in heart failure: role of aldosterone antagonism. Postgrad Med J 2010; 86 (1013):136-42. Review. PubMed PMID: 20237007.",
        "Wrenger E, Müller R, Moesenthin M, Welte T, Frölich JC, Neumann KH. Interaction of spironolactone with ACE inhibitors or angiotensin receptor blockers: analysis of 44 cases. BMJ 2003; 327(7407):147-9. PubMed PMID: 12869459.",
        "Marcy TR, Ripley TL. Aldosterone antagonists in the treatment of heart failure. Am J Health Syst Pharm 2006; 63(1): 49-58. PubMed PMID: 16373465.",
        "Tang WH, Parameswaran AC, Maroo AP, Francis GS. Aldosterone receptor antagonists in the medical management of chronic heart failure. Mayo Clin Proc 2005; 80(12): 1623-30. Review. PubMed PMID: 16342656."
      ],
      "exp": {
        "Aldosterone antagonists": "spironolactone, eplerenone",
        // "potassium-conserving drugs": "ACE inhibitors, Angiotensin Receptor Blockers, amiloride, triamterene",
        "ACE inhibitors": "Captopril, Zofenopril, Enalapril, Ramipril, Quinapril, Perindopril, Lisinopril, Benazepril, Imidapril, Trandolapril, Cilazapril, Fosinopril, Moexipril, Trandopril",
        "Angiotensin Receptor Blockers": "Azilsartan, candesartan, eprosartan, irbesartan, losartan, olmesartan, telmisartan, valsartan, eprosartan",
      }
    }, {
      "Section": "Section B: Cardiovascular System criteria",
      "terms": ["Phosphodiesterase type-5 inhibitors", "severe heart failure", "sildenafil", " tadalafil", " vardenafil", " avanafil", " lodenafil", " mirodenafil", " udenafil"],
      "reasone": "risk of cardiovascular collapse.",
      "id": "B13",
      "text": "Phosphodiesterase type-5 inhibitors in severe heart failure characterised by hypotension i.e. systolic BP < 90 mmHg, or concurrent daily nitrate therapy for angina.",
      "references": ["British National Formulary, No. 61, March 2011, p516.",
        "Kloner RA, Hutter AM, Emmick JT, Mitchell MI, Denne J, Jackson G. Time course of the interaction between tadalafil and nitrates. J Am Coll Cardiol 2003; 42 (10): 1855-60. PubMed PMID: 14642699."
      ],
      "exp": {
        "Phosphodiesterase type-5 inhibitors": "sildenafil, tadalafil, vardenafil, avanafil, lodenafil, mirodenafil, udenafil",
      }
    },

    // Section C
    {
      "Section": "Section C: Coagulation System criteria",
      "terms": ["aspirin"],
      "reasone": "increased risk of bleeding, no evidence for increased efficacy.",
      "id": "C1",
      "text": "Long-term aspirin at doses greater than 160mg per day.",
      "references": ["Dalen JE. Aspirin to prevent heart attack and stroke: what's the right dose? Am J Med 2006; 119(3):198-202. Review. PubMed PMID: 16490462.",
        "Fisher M, Knappertz V. The dose of aspirin for the prevention of cardiovascular and cerebrovascular events. Curr Med Res Opin 2006; 22(7):1239-48. Review. PubMed PMID: 16892516."
      ]
    }, {
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Aspirin"],
      "reasone": "risk of recurrent peptic ulcer.",
      "id": "C2",
      "text": "Aspirin with a past history of peptic ulcer disease without concomitant PPI.",
      "references": ["Yeomans ND. Reducing the risk of gastroduodenal ulcers with a fixed combination of esomeprazole and low-dose acetyl salicylic acid. Expert Rev Gastroenterol Hepatol 2011; 5(4):447-55. Review. PubMed PMID: 21780891.",
        "Burness CB, Scott LJ. Acetylsalicylic acid/esomeprazole fixed-dose combination. Drugs Aging 2012; 29(3):233-42. Review. PubMed PMID: 22372726.",
        "Lanas A. Gastrointestinal bleeding associated with low-dose aspirin use: relevance and management in clinical practice. Expert Opin Drug Saf 2011; 10(1):45-54. Review. PubMed PMID: 20645883."
      ]
    }, {
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Aspirin", " clopidogrel", " dipyridamole", " vitamin K antagonists", " direct thrombin inhibitors", " factor Xa inhibitors", "fondaparinux", " betrixaban", " rivaroxaban", " apixaban", " edoxaban", "Hirudin Bivalirudin", " Lepirudin", " Desirudin", " Argatroban", " melagatran", " ximelagatran", " dabigatran", "warfarin", "acenocoumarol", "dicumarol", "ethylbiscoumacetate", "phenprocoumon"],
      "reasone": "high risk of bleeding.",
      "id": "C3",
      "text": "Aspirin, clopidogrel, dipyridamole, vitamin K antagonists, direct thrombin inhibitors or factor Xa inhibitors with concurrent significant bleeding risk, i.e. uncontrolled severe hypertension, bleeding diathesis, recent non-trivial spontaneous bleeding.",
      "references": ["Lip GY. Implications of the CHA(2)DS(2)-VASc and HAS-BLED Scores for thromboprophylaxis in atrial fibrillation. Am J Med. 2011; 124(2):111-4. PubMed PMID: 20887966.",
        "Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJ, Lip GY. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation: the Euro Heart Survey. Chest 2010; 138(5):1093-100. PubMed PMID: 20299623."
      ],
      "exp": {
        "direct thrombin inhibitors": "Hirudin Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban",
        "vitamin K antagonists": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon"
      }
    }, {
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Aspirin", "clopidogrel", "secondary stroke prevention"],
      "reasone": "no evidence of added benefit over clopidogrel monotherapy.",
      "id": "C4",
      "text": "Aspirin plus clopidogrel as secondary stroke prevention, unless the patient has a coronary stent(s) inserted in the previous 12 months or concurrent acute coronary syndrome or has a high grade symptomatic carotid arterial stenosis.",
      "references": ["Diener HC, Bogousslavsky J, Brass LM, Cimminiello C, Csiba L, Kaste M, Leys D, Matias-Guiu J, Rupprecht HJ; MATCH investigators. Aspirin and clopidogrel compared with clopidogrel alone after recent ischaemic stroke or transient ischaemic attack in high-risk patients (MATCH): randomised, double-blind, placebo-controlled trial. Lancet 2004; 364(9431):331-7. PubMed PMID: 15276392.",
        "Bhatt DL, Fox KA, Hacke W, Berger PB, Black HR, Boden WE, Cacoub P, Cohen EA, Creager MA, Easton JD, Flather MD, Haffner SM, Hamm CW, Hankey GJ, Johnston SC, Mak KH, Mas JL, Montalescot G, Pearson TA, Steg PG, Steinhubl SR, Weber MA, Brennan DM, Fabry-Ribaudo L, Booth J, Topol EJ; CHARISMA Investigators. Clopidogrel and aspirin versus aspirin alone for the prevention of atherothrombotic events. N Engl J Med. 2006; 354(16):1706-17. PubMed PMID: 16531616.",
        "Usman MH, Notaro LA, Nagarakanti R, Brahin E, Dessain S, Gracely E, Ezekowitz MD. Combination antiplatelet therapy for secondary stroke prevention: enhanced efficacy or double trouble? Am J Cardiol 2009;103(8):1107-12. Review. PubMed PMID: 19361598.",
        "Squizzato A, Keller T, Romualdi E, Middeldorp S. Clopidogrel plus aspirin versus aspirin alone for preventing cardiovascular disease. Cochrane Database Syst Rev 2011;(1):CD005158. Review. PubMed PMID: 21249668.",
        "Fares RR, Lansing LS, Gallati CA, Mousa SA. Antiplatelet therapy with clopidogrel and aspirin in vascular diseases: clinical evidence for and against the combination. Expert Opin Pharmacother 2008; 9(3): 377-86. Review. PubMed PMID: 18220489."
      ],
    }, {
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Aspirin", "vitamin K antagonist", "direct thrombin inhibitors", "factor Xa inhibitors", "chronic atrial fibrillation", "warfarin", " acenocoumarol", " dicumarol", " ethylbiscoumacetate", " phenprocoumon", "Hirudin", " Bivalirudin", " Lepirudin", " Desirudin", " Argatroban", " melagatran", " ximelagatran", " dabigatran", "fondaparinux", " betrixaban", " rivaroxaban", " apixaban", " edoxaban"],
      "reasone": "No added benefit from aspirin.",
      "id": "C5",
      "text": "Aspirin in combination with vitamin K antagonist, direct thrombin inhibitors, or factor Xa inhibitors, in patients with chronic atrial fibrillation without a clear indication for aspirin.",
      "references": ["Flaker GC, Gruber M, Connolly SJ, Goldman S, Chaparro S, Vahanian A, Halinen MO, Horrow J, Halperin JL; SPORTIF Investigators. Risks and benefits of combining aspirin with anticoagulant therapy in patients with atrial fibrillation: an exploratory analysis of stroke prevention using an oral thrombin inhibitor in atrial fibrillation (SPORTIF) trials. Am Heart J 2006; 152(5):967-73. PubMed PMID: 17070169.",
        "Larson RJ, Fisher ES. Should aspirin be continued in patients started on warfarin? J Gen Intern Med 2004; 19(8):879-86. Review. PubMed Central PMCID: PMC1492499."
      ],
      "exp": {
        "vitamin K antagonist": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon",
        "direct thrombin inhibitors": "Hirudin, Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "C6",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Antiplatelet agents", "tirofiban", " triflusal", "eptifibatide", "abciximab", "aspirin", "clopidogrel", "cilostazol", "prasugrel", "dipyridamole", "ticagrelor", "cangrelor", "ticlopidine", "zontivity", "vorapaxar", "terutroban", "vitamin K antagonist", "warfarin", "acenocoumarol", "dicumarol", "ethylbiscoumacetate", "phenprocoumon", "direct thrombin inhibitors", "Hirudin", "Bivalirudin", "Lepirudin", "Desirudin", "Argatroban", "melagatran", "ximelagatran", "dabigatran", "factor Xa inhibitors", "fondaparinux", "betrixaban", "rivaroxaban", "apixaban", "edoxaban", "stable coronary", "cerebrovascular", "peripheral arterial disease"],
      "reasone": "No added benefit from dual therapy.",
      "text": "Antiplatelet agents with vitamin K antagonist, direct thrombin inhibitors or factor Xa inhibitors in patients with stable coronary, cerebrovascular or peripheral arterial disease without a clear indication for anticoagulant therapy.",
      "references": ["Holmes DR Jr, Kereiakes DJ, Kleiman NS, Moliterno DJ, Patti G, Grines CL. Combining antiplatelet and anticoagulant therapies. J Am Coll Cardiol 2009; 54(2):95-109. Review. PubMed PMID: 19573725.",
        "Rubboli A, Halperin JL, Airaksinen KE, Buerke M, Eeckhout E, Freedman SB, Gershlick AH, Schlitt A, Tse HF, Verheugt FW, Lip GY. Antithrombotic therapy in patients treated with oral anticoagulation undergoing coronary artery stenting. An expert consensus document with focus on atrial fibrillation. Ann Med 2008; 40(6):428-36. Review. PubMed PMID: 18608125."
      ],
      "exp": {
        "Antiplatelet agents": "tirofiban, triflusal, eptifibatide, abciximab, aspirin, clopidogrel, cilostazol, prasugrel, dipyridamole, ticagrelor, cangrelor, ticlopidine, zontivity, vorapaxar, terutroban",
        "vitamin K antagonist": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon",
        "direct thrombin inhibitors": "Hirudin, Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "C7",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Ticlopidine"],
      "reasone": "clopidogrel and prasugrel have similar efficacy, stronger evidence and fewer side-effects.",
      "text": "Ticlopidine in any circumstances.",
      "references": ["Furie KL, Kasner SE, Adams RJ, Albers GW, Bush RL, Fagan SC, Halperin JL, Johnston SC, Katzan I, Kernan WN, Mitchell PH, Ovbiagele B, Palesch YY, Sacco RL, Schwamm LH, Wassertheil-Smoller S, Turan TN, Wentworth D; American Heart Association Stroke Council, Council on Cardiovascular Nursing, Council on Clinical Cardiology, and Interdisciplinary Council on Quality of Care and Outcomes Research. Guidelines for the prevention of stroke in patients with stroke or transient ischemic attack: a guideline for healthcare professionals from the American heart association/American stroke association. Stroke 2011; 42(1):227-76. PubMed PMID: 20966421.",
        "Porto I, Giubilato S, De Maria GL, Biasucci LM, Crea F. Platelet P2Y12 receptor inhibition by thienopyridines: status and future. Expert Opin Investig Drugs 2009; 18(9):1317-32. Review. PubMed PMID: 19678800."
      ]
    }, {
      "id": "C8",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Vitamin K antagonist", "warfarin", " acenocoumarol", "dicumarol", "ethylbiscoumacetate", "phenprocoumon", "direct thrombin inhibitors", "Hirudin", "Bivalirudin", "Lepirudin", "Desirudin", "Argatroban", "melagatran", "ximelagatran", "dabigatran", "factor Xa inhibitors", "fondaparinux", "betrixaban", "rivaroxaban", "apixaban", "edoxaban", "first deep venous thrombosis"],
      "reasone": "no proven added benefit.",
      "text": "Vitamin K antagonist, direct thrombin inhibitors or factor Xa inhibitors for first deep venous thrombosis without continuing provoking risk factors (e.g. thrombophilia) for > 6 months.",
      "references": ["Pinede L, Ninet J, Duhaut P, Chabaud S, Demolombe-Rague S, Durieu I, Nony P, Sanson C, Boissel JP; Investigators of the \"Durée Optimale du Traitement AntiVitamines K\" (DOTAVK) Study. Comparison of 3 and 6 months of oral anticoagulant therapy after a first episode of proximal deep vein thrombosis or pulmonary embolism and comparison of 6 and 12 weeks of therapy after isolated calf deep vein thrombosis. Circulation 2001; 103(20): 2453-60. PubMed PMID: 11369685.",
        "Kearon C, Akl EA, Comerota AJ, Prandoni P, Bounameaux H, Goldhaber SZ, Nelson ME, Wells PS, Gould MK, Dentali F, Crowther M, Kahn SR; American College of Chest Physicians. Antithrombotic therapy for VTE disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest 2012; 141(2 Suppl): e419S-94S. PubMed PMID: 22315268."
      ],
      "exp": {
        "Vitamin K antagonist": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon",
        "direct thrombin inhibitors": "Hirudin, Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "C9",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Vitamin K antagonist", "warfarin", "acenocoumarol", "dicumarol", "ethylbiscoumacetate", "phenprocoumon", "direct thrombin inhibitors", "Hirudin", "Bivalirudin", "Lepirudin", "Desirudin", "Argatroban", "melagatran", "ximelagatran", "dabigatran", "fondaparinux", "betrixaban", "rivaroxaban", "apixaban", "edoxaban", "first pulmonary embolus"],
      "reasone": "no proven added benefit.",
      "text": "Vitamin K antagonist, direct thrombin inhibitors, or factor Xa inhibitors edoxaban) for first pulmonary embolus without continuing provoking risk factors (e.g. thrombophilia) for > 12 months.",
      "references": ["Kearon C, Akl EA, Comerota AJ, Prandoni P, Bounameaux H, Goldhaber SZ, Nelson ME, Wells PS, Gould MK, Dentali F, Crowther M, Kahn SR; American College of Chest Physicians. Antithrombotic therapy for VTE disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest 2012; 141(2 Suppl): e419S-94S. PubMed PMID: 22315268; PubMed Central PMCID: PMC3278049."],
      "exp": {
        "Vitamin K antagonist": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon",
        "direct thrombin inhibitors": "Hirudin, Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "C10",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", " ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib", "warfarin", "acenocoumarol", "dicumarol", "ethylbiscoumacetate", "phenprocoumon", "Hirudin", "Bivalirudin", "Lepirudin", "Desirudin", "Argatroban", "melagatran", "ximelagatran", "dabigatran", "factor Xa inhibitors", "fondaparinux", "betrixaban", "rivaroxaban", "apixaban", "edoxaban"],
      "reasone": "risk of gastrointestinal bleeding.",
      "text": "Non-steroidal anti-inflammatory drug (NSAID) and vitamin K antagonist, direct thrombin inhibitors, or factor Xa inhibitors in combination.",
      "references": ["Knijff-Dutmer EA, Van der Palen J, Schut G, Van de Laar MA. The influence of cyclo-oxygenase specificity of non-steroidal anti-inflammatory drugs on bleeding complications in concomitant coumarine users. QJM 2003; 96(7):513-20. PubMed PMID: 12881594.",
        "Peng S, Duggan A. Gastrointestinal adverse effects of non-steroidal anti-inflammatory drugs. Expert Opin Drug Saf 2005; 4(2):157-69. Review. PubMed PMID: 15794710."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen,  ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
        "vitamin K antagonist": "warfarin, acenocoumarol, dicumarol, ethylbiscoumacetate, phenprocoumon",
        "direct thrombin inhibitors": "Hirudin, Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
        "factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "C11",
      "Section": "Section C: Coagulation System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "antiplatelet agent", "tirofiban", "triflusal", "eptifibatide", "abciximab", "aspirin", "clopidogrel", "cilostazol", "prasugrel", "dipyridamole", "ticagrelor", "cangrelor", "ticlopidine", "zontivity", "vorapaxar", "terutroban"],
      "reasone": "increased risk of peptic ulcer disease.",
      "text": "Non-steroidal anti-inflammatory drug (NSAID) with concurrent antiplatelet agent without PPI prophylaxis.",
      "references": ["Lanza FL, Chan FK, Quigley EM; Practice Parameters Committee of the American College of Gastroenterology. Guidelines for prevention of NSAID-related ulcer complications. Am J Gastroenterol 2009; 104(3):728-38. PubMed PMID: 19240698.",
        "Nardulli G, Lanas A. [Risk of gastrointestinal bleeding with aspirin and platelet antiaggregants]. Gastroenterol Hepatol 2009; 32(1):36-43. Review. Spanish. PubMed PMID:  19174098.",
        "Zullo A, Hassan C, Campo SM, Morini S. Bleeding peptic ulcer in the elderly-risk factors and prevention strategies. Drugs Aging 2007; 24(10): 815-28. Review. PubMed PMID: 17896831."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen,  ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
        "antiplatelet agent": "tirofiban, triflusal, eptifibatide, abciximab, aspirin, clopidogrel, cilostazol, prasugrel, dipyridamole, ticagrelor, cangrelor, ticlopidine, zontivity, vorapaxar, terutroban"
      }
    },

    // Section D
    {
      "id": "D1",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Tricyclic antidepressants", "clomipramine", "imipramine", "desipramine", "dibenzepin", "lofepramine", "nortriptyline", "protriptyline", "amitriptyline", "amitriptylinoxide", "amoxapine", "butriptyline", "demexiptiline", "dimetacrine", "dosulepin", "doxepin", "imipraminoxide", "melitracen", "metapramine", "nitroxazepine", "noxiptiline", "pipofezine", "propizepine", "quinupramine", "amineptine", "iprindole", "opipramol", "tianeptine", "trimipramine", "dementia", "narrow angle glaucoma", "cardiac conduction abnormalities", "prostatism", "prior history of urinary retention."],
      "reasone": "risk of worsening these conditions.",
      "text": "Tricyclic antidepressants (TCAs) with dementia, narrow angle glaucoma, cardiac conduction abnormalities, prostatism, or prior history of urinary retention.",
      "references": ["Tricyclic and related antidepressant drugs. British National Formulary, No. 61, BMJ Group & Pharmaceutical Press, March 2011, p233.",
        "Mintzer J, Burns A. Anticholinergic side-effects of drugs in elderly people. J R Soc Med 2000; 93 (9):457-62. Review. PubMed PMID: 11089480.",
        "Verhamme KM, Sturkenboom MC, Stricker BH, Bosch R. Drug-induced urinary retention: incidence, management and prevention. Drug Saf 2008; 31(5):373-88. Review. PubMed PMID: 18422378.",
        "Vieweg WV, Wood MA, Fernandez A, Beatty-Brooks M, Hasnain M, Pandurangi AK. Proarrhythmic risk with antipsychotic and antidepressant drugs: implications in the elderly. Drugs Aging 2009; 26(12): 997-1012. Review. PubMed PMID: 19929028.",
        "Tripathi RC, Tripathi BJ, Haggerty C. Drug-induced glaucomas: mechanism and management. Drug Saf 2003; 26(11): 749-67. Review. PubMed PMID: 12908846."
      ],
      "exp": {
        "Tricyclic antidepressants": "clomipramine, imipramine, desipramine, dibenzepin, lofepramine, nortriptyline, protriptyline, amitriptyline, amitriptylinoxide, amoxapine, butriptyline, demexiptiline, dimetacrine, dosulepin, doxepin, imipraminoxide, melitracen, metapramine, nitroxazepine, noxiptiline, pipofezine, propizepine, quinupramine, amineptine, iprindole, opipramol, tianeptine, trimipramine",
      }
    }, {
      "id": "D2",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Tricyclic antidepressants", "clomipramine", "imipramine", "desipramine", "dibenzepin", "lofepramine", "nortriptyline", "protriptyline", "amitriptyline", "amitriptylinoxide", "amoxapine", "butriptyline", "demexiptiline", "dimetacrine", "dosulepin", "doxepin", "imipraminoxide", "melitracen", "metapramine", "nitroxazepine", "noxiptiline", "pipofezine", "propizepine", "quinupramine", "amineptine", "iprindole", "opipramol", "tianeptine", "trimipramine", "first-line antidepressant treatment"],
      "reasone": "higher risk of adverse drug reactions with TCAs than with SSRIs or SNRIs.",
      "text": "Initiation of Tricyclic antidepressants (TCAs) as first-line antidepressant treatment.",
      "references": ["Emslie G, Judge R. Tricyclic antidepressants and selective serotonin reuptake inhibitors: use during pregnancy, in children/adolescents and in the elderly. Acta Psychiatr Scand Suppl. 2000; 403: 26-34. Review. PubMed PMID: 11019932.",
        "Mottram P, Wilson K, Strobl J. Antidepressants for depressed elderly. Cochrane Database Syst Rev 2006 Jan 25; (1):CD003491. Review. PubMed PMID: 16437456."
      ],
      "exp": {
        "Tricyclic antidepressants": "clomipramine, imipramine, desipramine, dibenzepin, lofepramine, nortriptyline, protriptyline, amitriptyline, amitriptylinoxide, amoxapine, butriptyline, demexiptiline, dimetacrine, dosulepin, doxepin, imipraminoxide, melitracen, metapramine, nitroxazepine, noxiptiline, pipofezine, propizepine, quinupramine, amineptine, iprindole, opipramol, tianeptine, trimipramine",
      }
    }, {
      "id": "D3",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Neuroleptics with moderate-marked antimuscarinic/anticholinergic effects", "chlorpromazine", "clozapine", "flupenthixol", "fluphenzine", "pipothiazine", "promazine", "zuclopenthixol", "prostatism", "urinary retention"],
      "reasone": "high risk of urinary retention.",
      "text": "Neuroleptics with moderate-marked antimuscarinic/anticholinergic effects with a history of prostatism or previous urinary retention.",
      "references": ["Verhamme KM, Sturkenboom MC, Stricker BH, Bosch R. Drug-induced urinary retention: incidence, management and prevention. Drug Saf 2008; 31(5):373-88.Review. PubMed PMID: 18422378."],
      "exp": {
        "Neuroleptics with moderate-marked antimuscarinic/anticholinergic effects": "chlorpromazine, clozapine, flupenthixol, fluphenzine, pipothiazine, promazine, zuclopenthixol",
      }
    }, {
      "id": "D4",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Selective serotonin re-uptake inhibitors (SSRI’s)", "citalopram", "escitalopram", "fluoxetine", "fluvoxamine", "paroxetine", "sertraline", "dapoxetine", "hyponatraemia"],
      "reasone": "risk of exacerbating or precipitating hyponatraemia.",
      "text": "Selective serotonin re-uptake inhibitors (SSRI’s) with current or recent significant hyponatraemia i.e. serum Na+ < 130 mmol/l.",
      "references": ["Jacob S, Spinler SA. Hyponatremia associated with selective serotonin-reuptake inhibitors in older adults. Ann Pharmacother 2006; 40(9):1618-22. Review. PubMed PMID: 16896026.",
        "Draper B, Berman K. Tolerability of selective serotonin reuptake inhibitors: issues relevant to the elderly. Drugs Aging 2008; 25(6): 501-19. Review. PubMed PMID: 18540689."
      ],
      "exp": {
        "Selective serotonin re-uptake inhibitors (SSRI’s)": "citalopram, escitalopram, fluoxetine, fluvoxamine, paroxetine, sertraline, dapoxetine",
      }
    }, {
      "id": "D5",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Benzodiazepines", "Adinazolam", "Alprazolam", "Bentazepam", "Bretazenil", "Bromazepam", "Brotizolam", "Camazepam", "Chlordiazepoxide", "Cinazepam", "Cinolazepam", "Clobazam", "Clonazepam", "Clonazolam", "Clorazepate", "Clotiazepam", "Cloxazolam", "Delorazepam", "diazepam", "Diclazepam", "Estazolam", "Ethyl carfluzepate", "Etizolam", "Ethyl loflazepate", "Flubromazepam", "Flubromazolam", "Flunitrazepam", "Flurazepam", "Flutazolam", "Flutoprazepam", "Halazepam", "Ketazolam", "Loprazolam", "Lorazepam", "Lormetazepam", "Medazepam", "Mexazolam", "Midazolam", "Nifoxipam", "Nimetazepam", "Nitrazepam", "Nordiazepam", "Oxazepam", "Phenazepam", "Pinazepam", "Prazepam", "Premazepam", "Pyrazolam", "Quazepam", "Rilmazafone", "Temazepam", "Thienalprazolam", "Tetrazepam", "Triazolam"],
      "reasone": "no indication for longer treatment; risk of prolonged sedation, confusion, impaired balance, falls, road traffic accidents; all benzodiazepines should be withdrawn gradually if taken for > 4 weeks as there is a risk of causing a benzodiazepine withdrawal syndrome if stopped abruptly.",
      "text": "Benzodiazepines for ≥ 4 weeks.",
      "references": ["Madhusoodanan S, Bogunovic OJ. Safety of benzodiazepines in the geriatric population. Expert Opin Drug Saf 2004; 3(5): 485-93. Review. PubMed PMID:15335303.",
        "Glass J, Lanctôt KL, Herrmann N, Sproule BA, Busto UE. Sedative hypnotics inolder people with insomnia: meta-analysis of risks and benefits. BMJ 2005; 331(7526): 1169. Review. PubMed PMID: 16284208.",
        "Barker MJ, Greenwood KM, Jackson M, Crowe SF. Cognitive effects of long-term benzodiazepine use: a meta-analysis. CNS Drugs 2004; 18(1):37-48. PubMed PMID: 14731058."
      ],
      "exp": {
        "Benzodiazepines": "Adinazolam, Alprazolam, Bentazepam, Bretazenil, Bromazepam, Brotizolam, Camazepam, Chlordiazepoxide, Cinazepam, Cinolazepam, Clobazam, Clonazepam, Clonazolam, Clorazepate, Clotiazepam, Cloxazolam, Delorazepam, diazepam, Diclazepam, Estazolam, Ethyl carfluzepate, Etizolam, Ethyl loflazepate, Flubromazepam, Flubromazolam, Flunitrazepam, Flurazepam, Flutazolam, Flutoprazepam, Halazepam, Ketazolam, Loprazolam, Lorazepam, Lormetazepam, Medazepam, Mexazolam, Midazolam, Nifoxipam, Nimetazepam, Nitrazepam, Nordiazepam, Oxazepam, Phenazepam, Pinazepam, Prazepam, Premazepam, Pyrazolam, Quazepam, Rilmazafone, Temazepam, Thienalprazolam, Tetrazepam, Triazolam",
      }
    }, {
      "id": "D6",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Antipsychotics", "Chlorpromazine", "Chlorprothixene", "Levomepromazine", "Mesoridazine", "Periciazine", "Promazine", "Thioridazine", "Loxapine", "Molindone", "Perphenazine", "Thiothixene", "Droperidol", "Flupentixol", "Fluphenazine", "Haloperidol", "Pimozide", "Prochlorperazine", "Thioproperazine", "Trifluoperazine", "Zuclopenthixol", "Pimozide", "Prochlorperazine", "Benperidol", "Bromperidol", "Droperidol", "Timiperone", "Fluspirilene", "Penfluridol", "Chlorpromazine", "Cyamemazine", "Dixyrazine", "Fluphenazine", "Levomepromazine", "Perazine", "Pericyazine", "Perphenazine", "Pipotiazine", "Prochlorperazine", "Promethazine", "Prothipendyl,Trifluoperazine", "Chlorprothixene", "Clopenthixol", "Flupentixol", "Thiothixene", "Zuclopenthixol", "Clotiapine", "Loxapine", "Prothipendyl", "Carpipramine", "Clocapramine", "Molindone", "Mosapramine", "Sulpiride", "Sultopride", "Veralipride", "Amisulpride", "Aripiprazole", "Asenapine", "Blonanserin", "Iloperidone", "Lurasidone", "Melperone", "Olanzapine", "Paliperidone", "Risperidone", "Sertindole", "Sulpiride", "Ziprasidone", "Zotepine", "parkinsonism", "Lewy Body Disease"],
      "reasone": "risk of severe extra-pyramidal symptoms.",
      "text": "Antipsychotics (i.e. other than quetiapine or clozapine) in those with parkinsonism or Lewy Body Disease.",
      "references": ["Mena MA, de Yébenes JG. Drug-induced parkinsonism. Expert Opin Drug Saf 2006; 5(6):759-71. Review. PubMed PMID: 17044803.",
        "Eng ML, Welty TE. Management of hallucinations and psychosis in Parkinson's disease. Am J Geriatr Pharmacother 2010; 8(4):316-30. Review. PubMed PMID:20869621."
      ],
      "exp": {
        "Antipsychotics": "Chlorpromazine, Chlorprothixene, Levomepromazine, Mesoridazine, Periciazine, Promazine, Thioridazine, Loxapine, Molindone, Perphenazine, Thiothixene, Droperidol, Flupentixol, Fluphenazine, Haloperidol, Pimozide, Prochlorperazine, Thioproperazine, Trifluoperazine, Zuclopenthixol, Pimozide, Prochlorperazine, Benperidol, Bromperidol, Droperidol, Timiperone, Fluspirilene, Penfluridol, Chlorpromazine, Cyamemazine, Dixyrazine, Fluphenazine, Levomepromazine, Perazine, Pericyazine, Perphenazine, Pipotiazine, Prochlorperazine, Promethazine, Prothipendyl,Trifluoperazine, Chlorprothixene, Clopenthixol, Flupentixol, Thiothixene, Zuclopenthixol, Clotiapine, Loxapine, Prothipendyl, Carpipramine, Clocapramine, Molindone, Mosapramine, Sulpiride, Sultopride, Veralipride, Amisulpride, Aripiprazole, Asenapine, Blonanserin, Iloperidone, Lurasidone, Melperone, Olanzapine, Paliperidone, Risperidone, Sertindole, Sulpiride, Ziprasidone, Zotepine"
      }
    }, {
      "id": "D7",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Anticholinergics/antimuscarinics", "Atropine", "Benzatropine", "Biperiden", "Chlorpheniramine", "Dicyclomine (Dicycloverine)", "Dimenhydrinate", "Diphenhydramine", "Doxylamine", "Glycopyrrolate", "Hydroxyzine", "Orphenadrine", "Oxitropium", "Oxybutynin", "Tolterodine", "Trihexyphenidyl", "Scopolamine (Hyoscine)", "Solifenacin", "Tropicamide", "procyclidine", "cyclizine", "trimethobenzamide", "meclizine", "extra-pyramidal side-effects"],
      "reasone": "risk of anticholinergic toxicity.",
      "text": "Anticholinergics/antimuscarinics to treat extra-pyramidal side-effects of neuroleptic medications.",
      "references": ["Heinik J. Effects of trihexyphenidyl on MMSE and CAMCOG scores of medicated elderly patients with schizophrenia. Int Psychogeriatr 1998; 10(1): 103-8. PubMed PMID: 9629529.",
        "Drimer T, Shahal B, Barak Y. Effects of discontinuation of long-term anticholinergic treatment in elderly schizophrenia patients. Int ClinPsychopharmacol 2004; 19(1):27-9. PubMed PMID: 15101567."
      ],
      "exp": {
        "Anticholinergics/antimuscarinics": "Atropine, Benzatropine, Biperiden, Chlorpheniramine, Dicyclomine (Dicycloverine), Dimenhydrinate, Diphenhydramine, Doxylamine, Glycopyrrolate, Hydroxyzine, Orphenadrine, Oxitropium, Oxybutynin, Tolterodine, Trihexyphenidyl, Scopolamine (Hyoscine), Solifenacin, Tropicamide, procyclidine, cyclizine, trimethobenzamide, meclizine"
      }
    }, {
      "id": "D8",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Anticholinergics/antimuscarinics", "Atropine", "Benzatropine", "Biperiden", "Chlorpheniramine", "Dicyclomine (Dicycloverine)", "Dimenhydrinate", "Diphenhydramine", "Doxylamine", "Glycopyrrolate", "Hydroxyzine", "Orphenadrine", "Oxitropium", "Oxybutynin", "Tolterodine", "Trihexyphenidyl", "Scopolamine (Hyoscine)", "Solifenacin", "Tropicamide", "procyclidine", "cyclizine", "trimethobenzamide", "meclizine", "delirium", "dementia"],
      "reasone": "risk of exacerbation of cognitive impairment.",
      "text": "Anticholinergics/antimuscarinics in patients with delirium or dementia.",
      "references": ["Pagoria D, O'Connor RC, Guralnick ML. Antimuscarinic drugs: review of the cognitive impact when used to treat overactive bladder in elderly patients. Curr Urol Rep 2011; 12 (5): 351-7. Review. PubMed PMID: 21607875.",
        "Gerretsen P, Pollock BG. Drugs with anticholinergic properties: a current perspective on use and safety. Expert Opin Drug Saf 2011; 10(5): 751-65. Review. PubMed PMID: 21635190."
      ],
      "exp": {
        "Anticholinergics/antimuscarinics": "Atropine, Benzatropine, Biperiden, Chlorpheniramine, Dicyclomine (Dicycloverine), Dimenhydrinate, Diphenhydramine, Doxylamine, Glycopyrrolate, Hydroxyzine, Orphenadrine, Oxitropium, Oxybutynin, Tolterodine, Trihexyphenidyl, Scopolamine (Hyoscine), Solifenacin, Tropicamide, procyclidine, cyclizine, trimethobenzamide, meclizine"
      }
    }, {
      "id": "D9",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Neuroleptic antipsychotics", "Chlorpromazine", "Chlorprothixene", "Levomepromazine", "Mesoridazine", "Periciazine", "Promazine", "Thioridazine", "Loxapine", "Molindone", "Perphenazine", "Thiothixene", "Droperidol", "Flupentixol", "Fluphenazine", "Haloperidol", "Pimozide", "Prochlorperazine", "Thioproperazine", "Trifluoperazine", "Zuclopenthixol", "Pimozide", "Prochlorperazine", "Benperidol", "Bromperidol", "Droperidol", "Timiperone", "Fluspirilene", "Penfluridol", "Chlorpromazine", "Cyamemazine", "Dixyrazine", "Fluphenazine", "Levomepromazine", "Perazine", "Pericyazine", "Perphenazine", "Pipotiazine", "Prochlorperazine", "Promethazine", "Prothipendyl,Trifluoperazine", "Chlorprothixene", "Clopenthixol", "Flupentixol", "Thiothixene", "Zuclopenthixol", "Clotiapine", "Loxapine", "Prothipendyl", "Carpipramine", "Clocapramine", "Molindone", "Mosapramine", "Sulpiride", "Sultopride", "Veralipride", "Amisulpride", "Aripiprazole", "Asenapine", "Blonanserin", "Iloperidone", "Lurasidone", "Melperone", "Olanzapine", "Paliperidone", "Risperidone", "Sertindole", "Sulpiride", "Ziprasidone", "Zotepine", "behavioural and psychological symptoms of dementia (BPSD)"],
      "reasone": "increased risk of stroke.",
      "text": "Neuroleptic antipsychotics in patients with behavioural and psychological symptoms of dementia (BPSD) unless symptoms are severe and other treatments have failed.",
      "references": ["Sacchetti E, Turrina C, Valsecchi P. Cerebrovascular accidents in elderly people treated with antipsychotic drugs: a systematic review. Drug Saf 2010; 33(4): 273-88. Review. PubMed PMID: 20297860.",
        "Mittal V, Kurup L, Williamson D, Muralee S, Tampi RR. Risk of cerebrovascular adverse events and death in elderly patients with dementia when treated with antipsychotic medications: a literature review of evidence. Am J Alzheimers Dis Other Demen 2011; 26(1): 10-28. Review. PubMed PMID: 21282274.",
        "Chahine LM, Acar D, Chemali Z. The elderly safety imperative and antipsychotic usage. Harvard Rev Psychiatr 2010; 18:3 158-172. PubMed PMID: 20415632."
      ],
      "exp": {
        "Neuroleptic antipsychotics": "Chlorpromazine, Chlorprothixene, Levomepromazine, Mesoridazine, Periciazine, Promazine, Thioridazine, Loxapine, Molindone, Perphenazine, Thiothixene, Droperidol, Flupentixol, Fluphenazine, Haloperidol, Pimozide, Prochlorperazine, Thioproperazine, Trifluoperazine, Zuclopenthixol, Pimozide, Prochlorperazine, Benperidol, Bromperidol, Droperidol, Timiperone, Fluspirilene, Penfluridol, Chlorpromazine, Cyamemazine, Dixyrazine, Fluphenazine, Levomepromazine, Perazine, Pericyazine, Perphenazine, Pipotiazine, Prochlorperazine, Promethazine, Prothipendyl,Trifluoperazine, Chlorprothixene, Clopenthixol, Flupentixol, Thiothixene, Zuclopenthixol, Clotiapine, Loxapine, Prothipendyl, Carpipramine, Clocapramine, Molindone, Mosapramine, Sulpiride, Sultopride, Veralipride, Amisulpride, Aripiprazole, Asenapine, Blonanserin, Iloperidone, Lurasidone, Melperone, Olanzapine, Paliperidone, Risperidone, Sertindole, Sulpiride, Ziprasidone, Zotepine"
      }
    }, {
      "id": "D10",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Neuroleptics", "Chlorpromazine", "Chlorprothixene", "Levomepromazine", "Mesoridazine", "Periciazine", "Promazine", "Thioridazine", "Loxapine", "Molindone", "Perphenazine", "Thiothixene", "Droperidol", "Flupentixol", "Fluphenazine", "Haloperidol", "Pimozide", "Prochlorperazine", "Thioproperazine", "Trifluoperazine", "Zuclopenthixol", "Pimozide", "Prochlorperazine", "Benperidol", "Bromperidol", "Droperidol", "Timiperone", "Fluspirilene", "Penfluridol", "Chlorpromazine", "Cyamemazine", "Dixyrazine", "Fluphenazine", "Levomepromazine", "Perazine", "Pericyazine", "Perphenazine", "Pipotiazine", "Prochlorperazine", "Promethazine", "Prothipendyl,Trifluoperazine", "Chlorprothixene", "Clopenthixol", "Flupentixol", "Thiothixene", " Zuclopenthixol", "Clotiapine", "Loxapine", "Prothipendyl", "Carpipramine", "Clocapramine", "Molindone", "Mosapramine", "Sulpiride", "Sultopride", "Veralipride", "Amisulpride", "Aripiprazole", "Asenapine", "Blonanserin", "Iloperidone", "Lurasidone", "Melperone", "Olanzapine", "Paliperidone", "Risperidone", "Sertindole", "Sulpiride", "Ziprasidone", "Zotepine"],
      "reasone": "risk of confusion, hypotension, extra-pyramidal side effects, falls.",
      "text": "Neuroleptics as hypnotics, unless sleep disorder is due to psychosis or dementia.",
      "references": ["British National Formulary, no. 61, March 2011, pp 216 -227.",
        "RD McEvoy, KS Nyfort-Hansen. Sleep disorders in the elderly: the pros and cons of prescribing. In: Prescribing for Elderly Patients, eds. S. Jackson, P. Jansen, A. Mangoni. Wiley-Blackwell 2009, pp 45-52.",
        "Alexopoulos GS, Streim J, Carpenter D, Docherty JP. Expert Consensus Panel for Using Antipsychotic Drugs in Older Patients. Using antipsychotic agents in older patients. J Clin Psychiatry 2004; 65 Suppl 2:5-99; discussion 100-102; quiz 103-4. Review. PubMed PMID: 14994733."
      ],
      "exp": {
        "Neuroleptics": "Chlorpromazine, Chlorprothixene, Levomepromazine, Mesoridazine, Periciazine, Promazine, Thioridazine, Loxapine, Molindone, Perphenazine, Thiothixene, Droperidol, Flupentixol, Fluphenazine, Haloperidol, Pimozide, Prochlorperazine, Thioproperazine, Trifluoperazine, Zuclopenthixol, Pimozide, Prochlorperazine, Benperidol, Bromperidol, Droperidol, Timiperone, Fluspirilene, Penfluridol, Chlorpromazine, Cyamemazine, Dixyrazine, Fluphenazine, Levomepromazine, Perazine, Pericyazine, Perphenazine, Pipotiazine, Prochlorperazine, Promethazine, Prothipendyl,Trifluoperazine, Chlorprothixene, Clopenthixol, Flupentixol, Thiothixene,  Zuclopenthixol, Clotiapine, Loxapine, Prothipendyl, Carpipramine, Clocapramine, Molindone, Mosapramine, Sulpiride, Sultopride, Veralipride, Amisulpride, Aripiprazole, Asenapine, Blonanserin, Iloperidone, Lurasidone, Melperone, Olanzapine, Paliperidone, Risperidone, Sertindole, Sulpiride, Ziprasidone, Zotepine"
      }
    }, {
      "id": "D11",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Acetylcholinesterase inhibitors", "Physostigmine", "Neostigmine", "Pyridostigmine", "Ambenonium", "Demecarium", "Rivastigmine", "Galantamine", "Donepezil", "Tacrine ", "tetrahydroaminoacridine", "Edrophonium", "Huperzine A", "Ladostigil", "Ungeremine", "Lactucopicrin", "persistent bradycardia", "heart block", "recurrent unexplained syncope", "beta-blockers", "Propranolol", "Bucindolol", "Carteolol", "Carvedilol", "Labetalol", "Nadolol", "Oxprenolol", "Penbutolol", "Pindolol", "Sotalol", "Acebutolol", "Atenolol", "Betaxolol", "Bisoprolol", "Celiprolol", "Esmolol", "Metoprolol", "Nebivolol", "digoxin", "diltiazem", "verapamil"],
      "reasone": "risk of cardiac conduction failure, syncope and injury.",
      "text": "Acetylcholinesterase inhibitors with a known history of persistent bradycardia (< 60 beats/min.), heart block or recurrent unexplained syncope or concurrent treatment with drugs that reduce heart rate such as beta-blockers, digoxin, diltiazem, verapamil.",
      "references": ["Salarbaks AM, Boomkamp-Snoeren CM, van Puijenbroek E, Jansen PA, van Marum RJ. [Cardiac effects of cholinesterase inhibitors: a reason for restraint?]. Tijdschr Gerontol Geriatr 2009; 40(2):79-84. PubMed PMID: 19472574.",
        "Fisher A.A. and Davis M.W. Prolonged QT interval, syncope, and delirium Ann Pharmacother 2008 42; 2: 278-283. PubMed PMID: 18182475.",
        "Suleyman T., Tevfik P., Abdulkadir G. and Ozlem S. ventricular tachyarrhythmia associated with donepezil. Emerg Med J 2006; 23(8): 641-2. PubMed PMID: 16858101.",
        "Bordier P., Lanusse S., Garrigue S., Reynard C., Robert F., syncope in patients with Alzheimer's disease treated with donepezil.  Drugs Aging  2005;  22(8): 687-694. PubMed PMID: 16060718."
      ],
      "exp": {
        "Acetylcholinesterase inhibitors": "Physostigmine, Neostigmine, Pyridostigmine, Ambenonium, Demecarium, Rivastigmine, Galantamine, Donepezil, Tacrine (tetrahydroaminoacridine), Edrophonium, Huperzine A, Ladostigil, Ungeremine, Lactucopicrin",
        "beta-blockers": "Propranolol, Bucindolol, Carteolol, Carvedilol, Labetalol, Nadolol, Oxprenolol, Penbutolol, Pindolol, Sotalol, Acebutolol, Atenolol, Betaxolol, Bisoprolol, Celiprolol, Esmolol, Metoprolol, Nebivolol"
      }
    }, {
      "id": "D12",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Phenothiazines", "Cyamemazine", "Dixyrazine", "Fluphenazine", "Levomepromazine", "Perazine", "Pericyazine", "Perphenazine", "Pipotiazine", "Promethazine", "Prothipendyl", "Trifluoperazine", "Chlorpromazine"],
      "reasone": "phenothiazines are sedative, have significant anti-muscarinic toxicity in older people, with the exception of prochlorperazine for nausea/vomiting/vertigo, chlorpromazine for relief of persistent hiccoughs and levomepromazine as an anti-emetic in palliative care.",
      "text": "Phenothiazines as first-line treatment, since safer and more efficacious alternatives exist.",
      "references": ["Chahine L.M., Acar D., Chemali Z. The elderly safety imperative and antipsychotic Harvard Review of Psychiatry 2010; 18(3): 158-72. PubMed PMID: 20415632.",
        "Love R.C. The differential pharmacology of atypical antipsychotics: Impact on patients comorbid conditions. Consult Pharm 2006; 21; SUPPL. B: 11-18."
      ],
      "exp": {
        "Phenothiazines": "Cyamemazine, Dixyrazine, Fluphenazine, Levomepromazine, Perazine, Pericyazine, Perphenazine, Pipotiazine, Promethazine, Prothipendyl, Trifluoperazine, Chlorpromazine",
      }
    }, {
      "id": "D13",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["Levodopa", "dopamine agonists", "Apomorphine", "Bromocriptine", "Cabergoline", "Ciladopa", "Dihydrexidine", "Dinapsoline", "Doxanthrine", "Epicriptine", "Lisuride", "Pergolide", "Piribedil", "Pramipexole", "Propylnorapomorphine", "Quinagolide", "Ropinirole", "Rotigotine", "Roxindole", "Sumanirole", " fenoldopam", "Aripiprazole", "Phencyclidine", "Quinpirole", "benign essential tremor", "essential tremor"],
      "reasone": "no evidence of efficacy.",
      "text": "Levodopa or dopamine agonists for benign essential tremor",
      "references": ["Zesiewicz TA, Elble RJ, Louis ED, Gronseth GS, Ondo WG, Dewey RB Jr, Okun MS, Sullivan KL, Weiner WJ. Evidence-based guideline update- treatment of essential tremor-report of the Quality Standards subcommittee of the American Academy of Neurology. Neurology 2011; 77(19):1752-5. Review. PubMed PMID: 22013182.",
        "Deuschl G, Raethjen J, Hellriegel H, Elble R. Treatment of patients with essential tremor. Lancet Neurol 2011; 10(2): 148-61. Review. PubMed PMID:21256454."
      ],
      "exp": {
        "dopamine agonists": "Apomorphine, Bromocriptine, Cabergoline, Ciladopa, Dihydrexidine, Dinapsoline, Doxanthrine, Epicriptine, Lisuride, Pergolide, Piribedil, Pramipexole, Propylnorapomorphine, Quinagolide, Ropinirole, Rotigotine, Roxindole, Sumanirole,  fenoldopam, Aripiprazole, Phencyclidine, Quinpirole",
      }
    }, {
      "id": "D14",
      "Section": "Section D: Central Nervous System criteria",
      "terms": ["First-generation antihistamines", "Mepyramine ", "pyrilamine", "Antazoline", "Tripelennamine", "Diphenhydramine", "Carbinoxamine", "Doxylamine", "Orphenadrine", "Bromazine", "Clemastine", "Dimenhydrinate", "Pheniramine", "Chlorphenamine ", "chlorpheniramine", "Dexchlorpheniramine", "Dexbrompheniramine", "Brompheniramine", "Triprolidine", "Dimetindene", "Cyclizine", "Chlorcyclizine", "Hydroxyzine", "Meclizine", "Promethazine", "Alimemazine (trimeprazine)", "Cyproheptadine", "Azatadine", "Ketotifen"],
      "reasone": "safer, less toxic antihistamines now widely available.",
      "text": "First-generation antihistamines.",
      "references": ["Hansen J, Klimek L, Hörmann K. Pharmacological management of allergic rhinitis in the elderly-safety issues with oral antihistamines. Drugs Aging 2005; 22(4): 289-96. Review. PubMed PMID: 15839718.",
        "Slavin RG. Special considerations in treatment of allergic rhinitis in the elderly: role of intranasal corticosteroids. Allergy Asthma Proc 2010; 31(3): 179-84. Review. PubMed PMID: 20615319."
      ],
      "exp": {
        "First-generation antihistamines": "Mepyramine (pyrilamine), Antazoline, Tripelennamine, Diphenhydramine, Carbinoxamine, Doxylamine, Orphenadrine, Bromazine, Clemastine, Dimenhydrinate, Pheniramine, Chlorphenamine (chlorpheniramine), Dexchlorpheniramine, Dexbrompheniramine, Brompheniramine, Triprolidine, Dimetindene, Cyclizine, Chlorcyclizine, Hydroxyzine, Meclizine, Promethazine, Alimemazine (trimeprazine), Cyproheptadine, Azatadine, Ketotifen",
      }
    },
    // Section E
    {
      "id": "E1",
      "Section": "Section E. Renal System criteria",
      "terms": ["Digoxin"],
      "reasone": "Risk of digoxin toxicity if plasma levels not measured.",
      "text": "Digoxin at a long-term dose greater than 125µg/day if eGFR < 30 ml/min/1.73m2.",
      "references": ["Ahmed A. Digoxin and reduction in mortality and hospitalization in geriatric heart failure: importance of low doses and low serum concentrations. J Gerontol A Biol Sci Med Sci. 2007; 62(3): 323-9. PubMed PMID: 17389731.",
        "Podrazik PM, Schwartz JB. Cardiovascular pharmacology of aging. Cardiol Clin 1999; 17(1): 17-34. Review. PubMed PMID: 10093763."
      ]
    }, {
      "id": "E2",
      "Section": "Section E. Renal System criteria",
      "terms": ["Direct thrombin inhibitors", "Hirudin Bivalirudin", "Lepirudin", "Desirudin", "Argatroban", "melagatran", "ximelagatran", "dabigatran", ],
      "reasone": "Risk of bleeding.",
      "text": "Direct thrombin inhibitors if eGFR < 30 ml/min/1.73m2.",
      "references": ["Hariharan S, Madabushi R. Clinical pharmacology basis of deriving dosing recommendations for dabigatran in patients with severe renal impairment. J ClinPharmacol 2012; 52(1 Suppl):119S-25S. PubMed PMID: 21956605.",
        "Samama MM. Use of low-molecular-weight heparins and new anticoagulants in elderly patients with renal impairment. Drugs Aging 2011; 28(3): 177-93. PubMed PMID: 21329400."
      ],
      "exp": {
        "Direct thrombin inhibitors": "Hirudin Bivalirudin, Lepirudin, Desirudin, Argatroban, melagatran, ximelagatran, dabigatran",
      }
    }, {
      "id": "E3",
      "Section": "Section E. Renal System criteria",
      "terms": ["factor Xa inhibitors", "fondaparinux", "betrixaban", "rivaroxaban", "apixaban", "edoxaban"],
      "reasone": "Risk of bleeding.",
      "text": "Factor Xa inhibitors if eGFR < 15 ml/min/1.73m2.",
      "references": [" Kubitza D, Becka M, Mueck W, Halabi A, Maatouk H, Klause N, Lufft V, Wand DD, Philipp T, Bruck H. Effects of renal impairment on the pharmacokinetics, pharmacodynamics and safety of rivaroxaban, an oral, direct Factor Xa inhibitor. Br J Clin Pharmacol 2010; 70(5): 703-12. PubMed PMID: 21039764.",
        "Fox KA, Piccini JP, Wojdyla D, Becker RC, Halperin JL, Nessel CC, Paolini JF, Hankey GJ, Mahaffey KW, Patel MR, Singer DE, Califf RM. Prevention of stroke and systemic embolism with rivaroxaban compared with warfarin in patients withnon-valvular atrial fibrillation and moderate renal impairment. Eur Heart J 2011; 32(19): 2387-94. PubMed PMID: 21873708."
      ],
      "exp": {
        "Factor Xa inhibitors": "fondaparinux, betrixaban, rivaroxaban, apixaban, edoxaban"
      }
    }, {
      "id": "E4",
      "Section": "Section E. Renal System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", " ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib"],
      "reasone": "Risk of deterioration in renal function.",
      "text": "Non-steroidal anti-inflammatory drug (NSAID) if eGFR < 50 ml/min/1.73m2.",
      "references": ["Harirforoosh S, Jamali F. Renal adverse effects of non-steroidal anti-inflammatory drugs. Expert Opin Drug Saf 2009; 8(6): 669-81. Review. PubMed PMID: 19832117.",
        "Cheng HF, Harris RC. Renal effects of non-steroidal anti-inflammatory drugs and selective cyclooxygenase-2 inhibitors. Curr Pharm Des 2005; 11(14): 1795-804.  Review. PubMed PMID: 15892676."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen,  ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
      }
    }, {
      "id": "E5",
      "Section": "Section E. Renal System criteria",
      "terms": ["Colchicine"],
      "reasone": "risk of colchicine toxicity.",
      "text": "Colchicine if eGFR < 10 ml/min/1.73m2",
      "references": ["Hoskison KT, Wortmann RL. Management of gout in older adults: barriers to optimal control. Drugs Aging 2007; 24(1): 21-36. Review. PubMed PMID: 17233545.",
        "Hanlon JT, Aspinall SL, Semla TP, Weisbord SD, Fried LF, Good CB, Fine MJ, Stone RA, Pugh MJ, Rossi MI, Handler SM. Consensus guidelines for oral dosing of primarily renally cleared medications in older adults. J Am Geriatr Soc 2009; 57(2):335-40. Erratum in: J Am Geriatr Soc 2009; 57(11): 2179. Dosage error in article text. PubMed PMID: 19170784."
      ],
    }, {
      "id": "E6",
      "Section": "Section E. Renal System criteria",
      "terms": ["Metformin"],
      "reasone": "risk of lactic acidosis.",
      "text": "Metformin if eGFR < 30 ml/min/1.73m2.",
      "references": ["Germino FW. Non-insulin treatment of type 2 diabetes mellitus in geriatric patients: a review. Clin Ther 2011; 33(12): 1868-82. Review.PubMed PMID: 22136979.",
        "Lalau JD. Lactic acidosis induced by metformin: Incidence, management and prevention. Drug Safety 2010; 33(9): 727-40. PubMed PMID: 20701406."
      ],
    },
    // Section F
    {
      "id": "F1",
      "Section": "Section F. Gastrointestinal System criteria",
      "terms": ["Prochlorperazine", "metoclopramide", "Parkinsonism"],
      "reasone": "risk of exacerbating Parkinsonian symptoms.",
      "text": "Prochlorperazine or metoclopramide with Parkinsonism.",
      "references": ["Stephen PJ, Williamson J. Drug-induced parkinsonism in the elderly. Lancet 1984; 2(8411): 1082-3. PubMed PMID: 6150149.",
        "Ganzini L, Casey DE, Hoffman WF, McCall AL. The prevalence of metoclopramide-induced tardive dyskinesia and acute extrapyramidal movement disorders. Arch Intern Med 1993; 153(12): 1469-75. PubMed PMID: 8512437.",
        "Pasricha PJ, Pehlivanov N, Sugumar A, Jankovic J. Drug Insight: from disturbed motility to disordered movement - a review of the clinical benefits and medicolegal risks of metoclopramide. Nat Clin Pract Gastroenterol Hepatol 2006; 3(3): 138-48. Review. PubMed PMID: 16511548.",

      ],
    }, {
      "id": "F2",
      "Section": "Section F. Gastrointestinal System criteria",
      "terms": ["Proton Pump Inhibitor", "rabeprazole", "omeprazole", "esomeprazole", "lansoprazole", "pantoprazole", "dexlansoprazole", "ilaprazole", "uncomplicated peptic ulcer disease", " erosive peptic oesophagitis"],
      "reasone": "dose reduction or earlier discontinuation indicated.",
      "text": "Proton Pump Inhibitor for uncomplicated peptic ulcer disease or erosive peptic oesophagitis at full therapeutic dosage for > 8 weeks.",
      "references": ["British National Formulary vol. 61 (March, 2011), section 1.3.5. Proton pump inhibitors, pp 54-57.",
        "NICE guideline 2000/022 (last updated 14 July 2008). www.nice.org.uk.",
      ],
      "exp": {
        "Proton Pump Inhibitor": "rabeprazole, omeprazole, esomeprazole, lansoprazole, pantoprazole, dexlansoprazole, ilaprazole"
      }
    }, {
      "id": "F3",
      "Section": "Section F. Gastrointestinal System criteria",
      "terms": ["Drugs likely to cause constipation", "antimuscarinic", "anticholinergic drugs", "Atropine", "Benzatropine", "Biperiden", "Chlorpheniramine", "Dicyclomine ", "Dicycloverine", "Dimenhydrinate", "Diphenhydramine", "Doxylamine", "Glycopyrrolate", "Hydroxyzine", "Orphenadrine", "Oxitropium", "Oxybutynin", "Tolterodine", "Trihexyphenidyl", "Scopolamine (Hyoscine)", "Solifenacin", "Tropicamide", "procyclidine", "cyclizine", "trimethobenzamide", "meclizine", "oral iron", "opioids", "morphine", "codeine", "thebaine", " diacetylmorphine", "nicomorphine", "dipropanoylmorphine", " desomorphine", "acetylpropionylmorphine", "dibenzoylmorphine,diacetyldihydromorphine", " hydromorphone", "hydrocodone", "oxycodone", "oxymorphone", "ethylmorphine ,buprenorphine", " fentanyl", "pethidine", "levorphanol", "methadone", "tramadol", "dextropropoxyphene", " endorphins", "enkephalins", "dynorphins", "endomorphins", "meperidine", "verapamil", "aluminium antacids", "chronic constipation", "Aluminium bicarbonate", "aluminium hydroxide"],
      "reasone": "Risk of exacerbation of constipation.",
      "text": "Drugs likely to cause constipation (e.g. antimuscarinic/anticholinergic drugs, oral iron, opioids, verapamil, aluminium antacids) in patients with chronic constipation where non-consipating alternatives are appropriate.",
      "references": ["Meek PD, Evang SD, Tadrous M, Roux-Lirange D, Triller DM, Gumustop B. Overactive bladder drugs and constipation: a meta-analysis of randomized, placebo-controlled trials. Dig Dis Sci 2011; 56(1): 7-18. Review. PubMed PMID: 20596778.",
        "Müller-Lissner S. General geriatrics and gastroenterology: constipation and faecal incontinence. Best Pract Res Clin Gastroenterol 2002; 16(1): 115-33. Review. PubMed PMID: 11977932.",
        "Harari D, Gurwitz JH, Avorn J, Choodnovskiy I, Minaker KL. Correlates of regular laxative use by frail elderly persons. Am J Med 1995; 99(5): 513-8. PubMed PMID: 7485209.",
        "Opie LH. Choosing the correct drug for the individual hypertensive patient. Drugs 1992; 44 Suppl 1: 147-55. Review. PubMed PMID: 1283579."
      ],
      "exp": {
        "antimuscarinic/anticholinergic drugs": "Atropine, Benzatropine, Biperiden, Chlorpheniramine, Dicyclomine (Dicycloverine), Dimenhydrinate, Diphenhydramine, Doxylamine, Glycopyrrolate, Hydroxyzine, Orphenadrine, Oxitropium, Oxybutynin, Tolterodine, Trihexyphenidyl, Scopolamine (Hyoscine), Solifenacin, Tropicamide, procyclidine, cyclizine, trimethobenzamide, meclizine",
        "opioids": "morphine, codeine, thebaine,  diacetylmorphine, nicomorphine, dipropanoylmorphine,  desomorphine, acetylpropionylmorphine, dibenzoylmorphine,diacetyldihydromorphine,  hydromorphone, hydrocodone, oxycodone, oxymorphone, ethylmorphine ,buprenorphine,  fentanyl, pethidine, levorphanol, methadone, tramadol, dextropropoxyphene,  endorphins, enkephalins, dynorphins, endomorphins, meperidine",
        "aluminium antacids": "Aluminium bicarbonate, aluminium hydroxide"
      }
    }, {
      "id": "F4",
      "Section": "Section F. Gastrointestinal System criteria",
      "terms": ["Oral elemental iron"],
      "reasone": "No evidence of enhanced iron absorption above these doses.",
      "text": "Oral elemental iron doses greater than 200 mg daily (e.g. ferrous fumarate > 600 mg/day, ferrous sulphate > 600 mg/day, ferrous gluconate > 1800 mg/day).",
      "references": ["Rimon E, Kagansky N, Kagansky M, Mechnick L, Mashiah T, Namir M, Levy S. Are we giving too much iron? Low-dose iron therapy is effective in octogenarians. Am J Med 2005; 118(10): 1142-7. PubMed PMID: 16194646.",
        "British National Formulary vol. 61 (March, 2011), section 9.1.1.1. Iron deficiency anaemia, pp 576-7."
      ]
    },
    // Section G
    {
      "id": "G1",
      "Section": "Section G. Respiratory System criteria",
      "terms": ["Theophylline", "COPD"],
      "reasone": "Safer, more effective alternative; risk of adverse effects due to narrow therapeutic index.",
      "text": "Theophylline as monotherapy for COPD.",
      "references": ["Rabe KF, Hurd S, Anzueto A, Barnes PJ, Buist SA, Calverley P, Fukuchi Y, Jenkins C, Rodriguez-Roisin R, van Weel C, Zielinski J; Global Initiative for Chronic Obstructive Lung Disease. Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease: GOLD executive summary.  Am J Respir Crit Care Med 2007; 176(6): 532-55. Review. PubMed PMID: 17507545.",
        "Ramsdell J. Use of theophylline in the treatment of COPD. Chest 1995; 107(5 Suppl): 206S-209S. Review. PubMed PMID: 7743828."
      ]
    }, {
      "id": "G2",
      "Section": "Section G. Respiratory System criteria",
      "terms": ["Systemic corticosteroids", "Hydrocortisone",  "hydrocortisone acetate",  "cortisone acetate",  "tixocortol pivalate",  "prednisolone",  "methylprednisolone, prednisone, Triamcinolone acetonide",  "triamcinolone",  "mometasone",  "amcinonide",  "budesonide",  "desonide",  "fluocinonide",  "fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate",  "halometasone",  "alclometasone dipropionate",  "betamethasone valerate",  "betamethasone dipropionate",  "prednicarbate",  "clobetasone-17-butyrate, clobetasol-17-propionate",  "fluocortolone caproate",  "fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate",  "hydrocortisone-17-aceponate",  "hydrocortisone-17-buteprate",  "ciclesonide ", " prednicarbate", "moderate-severe COPD"],
      "reasone": "Unnecessary exposure to long-term side-effects of systemic corticosteroids and effective inhaled therapies are available.",
      "text": "Systemic corticosteroids instead of inhaled corticosteroids for maintenance therapy in moderate-severe COPD.",
      "references": ["Rabe KF, Hurd S, Anzueto A, Barnes PJ, Buist SA, Calverley P, Fukuchi Y, Jenkins C, Rodriguez-Roisin R, van Weel C, Zielinski J; Global Initiative for Chronic Obstructive Lung Disease. Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease: GOLD executive summary.  Am J Respir Crit Care Med 2007; 176(6): 532-55. Review. PubMed PMID: 17507545.",
        "Wood-Baker R, Walters J, Walters EH. Systemic corticosteroids in chronic obstructive pulmonary disease: an overview of Cochrane systematic reviews. Respir Med 2007; 101(3): 371-7. Review. PubMed PMID: 16962307."
      ],
      "exp": {
        "Systemic corticosteroids": "Hydrocortisone, hydrocortisone acetate, cortisone acetate, tixocortol pivalate, prednisolone, methylprednisolone, prednisone, Triamcinolone acetonide, triamcinolone, mometasone, amcinonide, budesonide, desonide, fluocinonide, fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate, halometasone, alclometasone dipropionate, betamethasone valerate, betamethasone dipropionate, prednicarbate, clobetasone-17-butyrate, clobetasol-17-propionate, fluocortolone caproate, fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate, hydrocortisone-17-aceponate, hydrocortisone-17-buteprate, ciclesonide and prednicarbate"
      }
    }, {
      "id": "G3",
      "Section": "Section G. Respiratory System criteria",
      "terms": ["Anti-muscarinic bronchodilators", "aclidinium", "umeclidinium", "ipratropium", "tiotropium", "narrow angle glaucoma", "bladder outflow obstruction"],
      "reasone": "May exacerbate glaucoma, and may cause urinary retention.",
      "text": "Anti-muscarinic bronchodilators with a history of narrow angle glaucoma or bladder outflow obstruction.",
      "references": ["Gupta P, O'Mahony MS. Potential adverse effects of bronchodilators in the treatment of airways obstruction in older people: recommendations for prescribing. Drugs Aging 2008; 25(5): 415-43. Review. PubMed PMID: 18447405.",
        "Oba Y, Zaza T, Thameem DM. Safety, tolerability and risk benefit analysis of tiotropium in COPD. Int J Chron Obstruct Pulmon Dis 2008; 3(4): 575-84. Review. PubMed PMID: 19281075."
      ],
      "exp": {
        "Anti-muscarinic bronchodilators": "aclidinium, umeclidinium, ipratropium, tiotropium"
      }
    }, {
      "id": "G4",
      "Section": "Section G. Respiratory System criteria",
      "terms": ["Benzodiazepines", "Adinazolam", "Alprazolam", "Bentazepam", "Bretazenil", "Bromazepam", "Brotizolam", "Camazepam", "Chlordiazepoxide", "Cinazepam", "Cinolazepam", "Clobazam", "Clonazepam", "Clonazolam", "Clorazepate", "Clotiazepam", "Cloxazolam", "Delorazepam", "diazepam", "Diclazepam", "Estazolam", "Ethyl carfluzepate", "Etizolam", "Ethyl loflazepate", "Flubromazepam", "Flubromazolam", "Flunitrazepam", "Flurazepam", "Flutazolam", "Flutoprazepam", "Halazepam", "Ketazolam", "Loprazolam", "Lorazepam", "Lormetazepam", "Medazepam", "Mexazolam", "Midazolam", "Nifoxipam", "Nimetazepam", "Nitrazepam", "Nordiazepam", "Oxazepam", "Phenazepam", "Pinazepam", "Prazepam", "Premazepam", "Pyrazolam", "Quazepam", "Rilmazafone", "Temazepam", "Thienalprazolam", "Tetrazepam", "Triazolam", "chronic respiratory", "chronic respiratory failure"],
      "reasone": "Risk of exacerbation of respiratory failure.",
      "text": "Benzodiazepines with acute or chronic respiratory failure i.e. pO2 < 8.0 kPa ± pCO2 > 6.5 kPa.",
      "references": ["Model DG, Berry DJ. Effects of chlordiazepoxide in respiratory failure due to chronic bronchitis. Lancet 1974; 2(7885): 869-70. PubMed PMID: 4137638.",
        "Hak E, Bont J, Hoes AW, Verheij TJ. Prognostic factors for serious morbidity and mortality from community-acquired lower respiratory tract infections among the elderly in primary care. Fam Pract 2005; 22(4): 375-80. PubMed PMID: 15805127."
      ],
      "exp": {
        "Benzodiazepines": "Adinazolam, Alprazolam, Bentazepam, Bretazenil, Bromazepam, Brotizolam, Camazepam, Chlordiazepoxide, Cinazepam, Cinolazepam, Clobazam, Clonazepam, Clonazolam, Clorazepate, Clotiazepam, Cloxazolam, Delorazepam, diazepam, Diclazepam, Estazolam, Ethyl carfluzepate, Etizolam, Ethyl loflazepate, Flubromazepam, Flubromazolam, Flunitrazepam, Flurazepam, Flutazolam, Flutoprazepam, Halazepam, Ketazolam, Loprazolam, Lorazepam, Lormetazepam, Medazepam, Mexazolam, Midazolam, Nifoxipam, Nimetazepam, Nitrazepam, Nordiazepam, Oxazepam, Phenazepam, Pinazepam, Prazepam, Premazepam, Pyrazolam, Quazepam, Rilmazafone, Temazepam, Thienalprazolam, Tetrazepam, Triazolam",
      }
    },
    // Section H
    {
      "id": "H1",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["Non-COX-2 selective Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", "ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "history of peptic ulcer disease", "gastrointestinal bleeding"],
      "reasone": "Risk of peptic ulcer relapse.",
      "text": "Non-COX-2 selective Non-steroidal anti-inflammatory drug (NSAID) with history of peptic ulcer disease or gastrointestinal bleeding, unless with concurrent PPI or H2 antagonist.",
      "references": ["Blandizzi C, Tuccori M, Colucci R, Gori G, Fornai M, Antonioli L, Ghisu N, Del Tacca M. Clinical efficacy of esomeprazole in the prevention and healing of gastrointestinal toxicity associated with NSAIDs in elderly patients. Drugs Aging 2008; 25(3): 197-208. Review. PubMed PMID: 18331072.",
        "Lanas A, Ferrandez A. Inappropriate prevention of NSAID-induced gastrointestinal events among long-term users in the elderly. Drugs Aging 2007; 24(2):121-31. Review.  PubMed PMID: 17313200.",
        "Alaa Rostom, Catherine Dube, George A Wells, Peter Tugwell, Vivian Welch, Emilie Jolicoeur, Jessie McGowan, Angel Lanas. Prevention of NSAID-induced gastroduodenal ulcers. Editorial Group: Cochrane Upper Gastrointestinal and Pancreatic Diseases Group Published Online: 20 Jan 2010. DOI: 10.1002/14651858.CD002296."
      ],
      "exp": {
        "Non-COX-2 selective Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen, ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin",
      }
    }, {
      "id": "H2",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", "ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib", "heart failure", "hypertension"],
      "reasone": "Risk of exacerbation of hypertension/heart failure.",
      "text": "Non-steroidal anti-inflammatory drug (NSAID) with severe hypertension or severe heart failure.",
      "references": ["White WB. Defining the problem of treating the patient with hypertension and arthritis pain.  Am J Med. 2009; 122(5 Suppl): S3-9. Review.  PubMed PMID: 19393824.",
        "Park KE.Qin Y, Bavry AA. Nonsteroidal anti-inflammatory drugs and their effects in the elderly. Aging Health 2012; 8(2): 167-177."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen, ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
      }
    }, {
      "id": "H3",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", "ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib", "osteoarthritis pain"],
      "reasone": "Simple analgesics preferable and usually as effective for pain relief.",
      "text": "Long-term use of Non-steroidal anti-inflammatory drug (NSAID) (>3 months) for symptom relief of osteoarthritis pain where paracetamol has not been tried.",
      "references": ["Nikles CJ, Yelland M, Del Mar C, Wilkinson D. The role of paracetamol in chronic pain: an evidence-based approach. Am J Ther 2005; 12(1): 80-91. Review. PubMed PMID: 15662295.",
        "Seed SM, Dunican KC, Lynch AM. Osteoarthritis: a review of treatment options.  Geriatrics 2009; 64(10): 20-9. Review. PubMed PMID: 20726384.",
        "Jawad AS. Analgesics and osteoarthritis: are treatment guidelines reflected in clinical practice? Am J Ther 2005; 12(1): 98-103. Review. PubMed PMID: 15662297."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen, ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
      }
    }, {
      "id": "H4",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["corticosteroids", "Hydrocortisone",  "hydrocortisone acetate",  "cortisone acetate",  "tixocortol pivalate",  "prednisolone",  "methylprednisolone, prednisone, Triamcinolone acetonide",  "triamcinolone",  "mometasone",  "amcinonide",  "budesonide",  "desonide",  "fluocinonide",  "fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate",  "halometasone",  "alclometasone dipropionate",  "betamethasone valerate",  "betamethasone dipropionate",  "prednicarbate",  "clobetasone-17-butyrate, clobetasol-17-propionate",  "fluocortolone caproate",  "fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate",  "hydrocortisone-17-aceponate",  "hydrocortisone-17-buteprate",  "ciclesonide ", "prednicarbate", "rheumatoid arthritis"],
      "reasone": "Risk of systemic corticosteroid side-effects.",
      "text": "Long-term corticosteroids (>3 months) as monotherapy for rheumatoid arthritis.",
      "references": ["Onishi S, Iwmoto M, Minota S.  Management of elderly-onset rheumatoid arthritis. J Clin Immunol 2010; 33(1): 1-7. PubMed PMID: 20190503.",
        "American College of Rheumatology Subcommittee on Rheumatoid Arthritis Guidelines. Guidelines for the management of rheumatoid arthritis: 2002 Update. Arthritis Rheum 2002; 46(2): 28-46. PubMed PMID: 11840435.",
        "Soubrier M, Mathieu S, Payet S, Dubost JJ, Ristori JM. Elderly-onset rheumatoid arthritis. Joint Bone Spine 2010; 77(4): 290-6. Review. PubMed PMID: 20554241."
      ],
      "exp": {
        "corticosteroids": "Hydrocortisone, hydrocortisone acetate, cortisone acetate, tixocortol pivalate, prednisolone, methylprednisolone, prednisone, Triamcinolone acetonide, triamcinolone, mometasone, amcinonide, budesonide, desonide, fluocinonide, fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate, halometasone, alclometasone dipropionate, betamethasone valerate, betamethasone dipropionate, prednicarbate, clobetasone-17-butyrate, clobetasol-17-propionate, fluocortolone caproate, fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate, hydrocortisone-17-aceponate, hydrocortisone-17-buteprate, ciclesonide and prednicarbate"
      }
    }, {
      "id": "H5",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["corticosteroids", "Hydrocortisone",  "hydrocortisone acetate",  "cortisone acetate",  "tixocortol pivalate",  "prednisolone",  "methylprednisolone, prednisone, Triamcinolone acetonide",  "triamcinolone",  "mometasone",  "amcinonide",  "budesonide",  "desonide",  "fluocinonide",  "fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate",  "halometasone",  "alclometasone dipropionate",  "betamethasone valerate",  "betamethasone dipropionate",  "prednicarbate",  "clobetasone-17-butyrate, clobetasol-17-propionate",  "fluocortolone caproate",  "fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate",  "hydrocortisone-17-aceponate",  "hydrocortisone-17-buteprate",  "ciclesonide ", "prednicarbate", "rheumatoid arthritis", "osteoarthritis"],
      "reasone": "Risk of systemic corticosteroid side-effects.",
      "text": "Corticosteroids (other than periodic intra-articular injections for mono-articular pain) for osteoarthritis",
      "references": ["British National Formulary volume 61, March 2011, pp 443-4.",
        "Recommendations for the medical management of osteoarthritis of the hip and knee: 2000 update.  American College of Rheumatology Subcommittee on Osteoarthritis Guidelines. Arthritis Rheum 2000; 43(9): 1905-15. PubMed PMID: 11014340."
      ],
      "exp": {
        "Corticosteroids": "Hydrocortisone, hydrocortisone acetate, cortisone acetate, tixocortol pivalate, prednisolone, methylprednisolone, prednisone, Triamcinolone acetonide, triamcinolone, mometasone, amcinonide, budesonide, desonide, fluocinonide, fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate, halometasone, alclometasone dipropionate, betamethasone valerate, betamethasone dipropionate, prednicarbate, clobetasone-17-butyrate, clobetasol-17-propionate, fluocortolone caproate, fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate, hydrocortisone-17-aceponate, hydrocortisone-17-buteprate, ciclesonide and prednicarbate"
      }
    }, {
      "id": "H6",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", " ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib", "colchicine", " xanthine-oxidase inhibitor", "Allopurinol", "Amflutizole", "Benzbromarone", "oxypurinol ", "tisopurine", "febuxostat", "topiroxostat", "Kaempferol", "Tisopurine", "thiopurinol", "gout"],
      "reasone": "xanthine-oxidase inhibitors are first choice prophylactic drugs in gout.",
      "text": "Long-term Non-steroidal anti-inflammatory drug (NSAID) or colchicine for prevention of relapses of gout where there is no contraindication to a xanthine-oxidase inhibitor",
      "references": ["De Leonardis F, Govoni M, Colina M, Bruschi M, Trotta F. Elderly-onset gout: a review. Rheumatol Int 2007; 28(1): 1-6. Review. PubMed PMID: 17653719.",
        "Hoskison KT, Wortmann RL.  Management of gout in older adults: barriers to optimal control.  Drugs Aging 2007; 24(1): 21-36. Review.  PubMed PMID: 17233545."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen,  ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
        "xanthine-oxidase inhibitor": "Allopurinol, Amflutizole, Benzbromarone, oxypurinol , tisopurine, febuxostat, topiroxostat, Kaempferol, Tisopurine, thiopurinol"
      }
    }, {
      "id": "H7",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["COX-2 selective Non-steroidal anti-inflammatory drug (NSAID)", "Celecoxib", "Rofecoxib", "Etoricoxib", "cardiovascular disease"],
      "reasone": "Increased risk of myocardial infarction and stroke.",
      "text": "COX-2 selective Non-steroidal anti-inflammatory drug (NSAID) with concurrent cardiovascular disease.",
      "references": ["Pilotto A, Sancarlo D, Addante F, Scarcelli C, Franceschi M. Non-steroidal anti-inflammatory drug use in the elderly. Surg Oncol 2010; 19(3): 167-72. Review. PubMed PMID: 20022240.",
        "Strand V. Are COX-2 inhibitors preferable to non-selective non-steroidal anti-inflammatory drugs in patients with risk of cardiovascular events taking low-dose aspirin? Lancet 2007; 370(9605): 2138-51. Review. PubMed PMID: 18156036."
      ],
      "exp": {
        "COX-2 selective Non-steroidal anti-inflammatory drug (NSAID)": "Celecoxib, Rofecoxib, Etoricoxib"
      }
    }, {
      "id": "H8",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["Non-steroidal anti-inflammatory drug (NSAID)", "aspirin", "salicylate", "salsalate", "diflunisal", "dexibuprofen", "dexketoprofen", "loxoprofen", "tolmetin", "aceclofenac", "tenoxicam", "droxicam", "lornoxicam", "isoxicam", "phenylbutazone", "ibuprofen", " ketoprofen", "fenoprofen", "tolmetin", "naproxen", "sulindac", "indomethacin", "piroxicam", "diclofenac", "ketorolac", "etodolac", "meloxicam", "flurbiprofen", "mefenamic acid", "nabumetone", "oxaprozin", "meclofenamate", "meclofenamic acid", "flufenamic acid", "tolfenamic acid", "nimesulide", "clonixin", "Celecoxib", "Rofecoxib", "Etoricoxib", "corticosteroids", "Hydrocortisone", "hydrocortisone acetate, cortisone acetate, tixocortol pivalate, prednisolone, methylprednisolone", "prednisone", "Triamcinolone acetonide, triamcinolone, mometasone, amcinonide, budesonide, desonide, fluocinonide, fluocinolone acetonide", "halcinonide", "Betamethasone", "betamethasone sodium phosphate", "dexamethasone", "dexamethasone sodium phosphate", "fluocortolone", "Hydrocortisone-17-valerate, halometasone, alclometasone dipropionate, betamethasone valerate, betamethasone dipropionate, prednicarbate, clobetasone-17-butyrate", "clobetasol-17-propionate, fluocortolone caproate, fluocortolone pivalate", "fluprednidene acetate", "Hydrocortisone-17-butyrate, hydrocortisone-17-aceponate, hydrocortisone-17-buteprate, ciclesonide and prednicarbate"],
      "reasone": "Increased risk of peptic ulcer disease.",
      "text": "Non-steroidal anti-inflammatory drug (NSAID) with concurrent corticosteroids without PPI prophylaxis.",
      "references": ["Peng S, Duggan A. Gastrointestinal adverse effects of non-steroidal anti-inflammatory drugs.  Expert Opin Drug Saf 2005; 4(2): 157-69. Review. PubMed PMID: 15794710.",
        "Zullo A, Hassan C, Campo SM, Morini S. Bleeding peptic ulcer in the elderly: risk factors and prevention strategies. Drugs Aging 2007; 24(10): 815-28. Review.  PubMed PMID: 17896831.",
        "Scheiman JM. NSAID-induced peptic ulcer disease: a critical review of pathogenesis and management. Dig Dis 1994; 12(4): 210-22. Review. PubMed PMID: 7851000."
      ],
      "exp": {
        "Non-steroidal anti-inflammatory drug (NSAID)": "aspirin, salicylate, salsalate, diflunisal, dexibuprofen, dexketoprofen, loxoprofen, tolmetin, aceclofenac, tenoxicam, droxicam, lornoxicam, isoxicam, phenylbutazone, ibuprofen,  ketoprofen, fenoprofen, tolmetin, naproxen, sulindac, indomethacin, piroxicam, diclofenac, ketorolac, etodolac, meloxicam, flurbiprofen, mefenamic acid, nabumetone, oxaprozin, meclofenamate, meclofenamic acid, flufenamic acid, tolfenamic acid, nimesulide, clonixin, Celecoxib, Rofecoxib, Etoricoxib",
        "corticosteroids": "Hydrocortisone, hydrocortisone acetate, cortisone acetate, tixocortol pivalate, prednisolone, methylprednisolone, prednisone, Triamcinolone acetonide, triamcinolone, mometasone, amcinonide, budesonide, desonide, fluocinonide, fluocinolone acetonide, halcinonide, Betamethasone, betamethasone sodium phosphate, dexamethasone, dexamethasone sodium phosphate, fluocortolone, Hydrocortisone-17-valerate, halometasone, alclometasone dipropionate, betamethasone valerate, betamethasone dipropionate, prednicarbate, clobetasone-17-butyrate, clobetasol-17-propionate, fluocortolone caproate, fluocortolone pivalate, fluprednidene acetate, Hydrocortisone-17-butyrate, hydrocortisone-17-aceponate, hydrocortisone-17-buteprate, ciclesonide and prednicarbate"
      }
    }, {
      "id": "H9",
      "Section": "Section H: Musculoskeletal System criteria",
      "terms": ["bisphosphonates", "Etidronate", "Clodronate", "Tiludronate", "Pamidronate", "Neridronate", "Olpadronate", "Alendronate", "Ibandronate", "Risedronate", "Zoledronate", "upper gastrointestinal disease", "dysphagia", "oesophagitis", "gastritis", "duodenitis", "peptic ulcer disease", "upper gastrointestinal bleeding."],
      "reasone": "Risk of relapse/exacerbation of oesophagitis, oesophageal ulcer, oesophageal stricture.",
      "text": "Oral bisphosphonates in patients with a history of upper gastrointestinal disease i.e. dysphagia, oesophagitis, gastritis, duodenitis, or peptic ulcer disease, or upper gastrointestinal bleeding.",
      "references": ["Pazianas M, Abrahamsen B. Safety of bisphosphonates. Bone 2011; 49(1): 103-10. PubMed PMID: 21236370.",
        "Civitelli R, Napoli N, Armamento-Villareal R. Use of intravenous bisphosphonates in osteoporosis. Curr Osteoporos Rep 2007;  5(1): 8-13. PubMed PMID: 17320022.",
        "Gaudio A, Morabito N. Pharmacological management of severe postmenopausal osteoporosis. Drugs Aging 2005; 22(5): 405-17. Review. PubMed PMID: 15903353."
      ],
      "exp": {
        "bisphosphonates": "Etidronate, Clodronate, Tiludronate, Pamidronate, Neridronate, Olpadronate, Alendronate, Ibandronate, Risedronate, Zoledronate"
      }
    },
    // Section I
    {
      "id": "I1",
      "Section": "Section I: Urogenital System criteria",
      "terms": ["Antimuscarinic drugs", "Atropine", "Benzatropine", "Biperiden", "Chlorpheniramine", "Dicyclomine (Dicycloverine)", "Dimenhydrinate", "Diphenhydramine", "Doxylamine", "Glycopyrrolate", "Hydroxyzine", "Orphenadrine", "Oxitropium", "Oxybutynin", "Tolterodine", "Trihexyphenidyl", "Scopolamine (Hyoscine)", "Solifenacin", "Tropicamide", "procyclidine", "cyclizine", "trimethobenzamide", "meclizine", "overactive bladder syndrome", "dementia", "chronic cognitive impairment"],
      "reasone": "Risk of increased confusion, agitation.\nRisk of acute exacerbation of glaucoma.\nRisk of urinary retention.",
      "text": "Antimuscarinic drugs for overactive bladder syndrome with concurrent dementia or chronic cognitive impairment, or narrow-angle glaucoma or chronic prostatism",
      "references": ["Pagoria D, O'Connor RC, Guralnick ML. Antimuscarinic drugs: review of the cognitive impact when used to treat overactive bladder in elderly patients. Curr Urol Rep 2011; 12(5): 351-7. Review. PubMed PMID: 21607875.",
        "Kay GG, Abou-Donia MB, Messer WS Jr, Murphy DG, Tsao JW, Ouslander JG. Antimuscarinic drugs for overactive bladder and their potential effects on cognitive function in older patients.  J Am Geriatr Soc 2005; 53(12): 2195-201. Review. PubMed PMID: 16398909."
      ],
      "exp": {
        "Antimuscarinic drugs": "Atropine, Benzatropine, Biperiden, Chlorpheniramine, Dicyclomine (Dicycloverine), Dimenhydrinate, Diphenhydramine, Doxylamine, Glycopyrrolate, Hydroxyzine, Orphenadrine, Oxitropium, Oxybutynin, Tolterodine, Trihexyphenidyl, Scopolamine (Hyoscine), Solifenacin, Tropicamide, procyclidine, cyclizine, trimethobenzamide, meclizine"
      }
    }, {
      "id": "I2",
      "Section": "Section I: Urogenital System criteria",
      "terms": ["Selective alpha-1 selective blockers", "alfuzosin", "doxazosin", "indoramin", "prazosin", "tamsulosin", "terazosin", "Silodosin", "symptomatic orthostatic hypotension", "micturition syncope"],
      "reasone": "Risk of precipitating recurrent syncope.",
      "text": "Selective alpha-1 selective blockers in those with symptomatic orthostatic hypotension or micturition syncope.",
      "references": ["Lowe FC. Role of the newer alpha, -adrenergic-receptor antagonists in the treatment of benign prostatic hyperplasia-related lower urinary tract symptoms. Clin Ther 2004; 26(11): 1701-13. Review. PubMed PMID: 15639685.",
        "British National Formulary vol. 61, March 2011: p 506."
      ],
      "exp": {
        "Selective alpha-1 selective blockers": "alfuzosin, doxazosin, indoramin, prazosin, tamsulosin, terazosin, Silodosin"
      }
    },
    // Section J
    {
      "id": "J1",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Sulphonylureas", "glibenclamide", "chlorpropamide", "glimepiride)"],
      "reasone": "Risk of prolonged hypoglycaemia.",
      "text": "Sulphonylureas with a long duration of action (e.g. glibenclamide, chlorpropamide, glimepiride) with type 2 diabetes mellitus.",
      "references": ["Graal MB, Wolffenbuttel BH. The use of sulphonylureas in the elderly. Drugs Aging 1999; 15(6): 471-81. Review. PubMed PMID: 10641958.",
        "Langtry HD, Balfour JA. Glimepiride. A review of its use in the management of type 2 diabetes mellitus. Drugs 1998; 55(4): 563-84. Review. PubMed PMID: 9561345."
      ]
    }, {
      "id": "J2",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Thiazolidenediones", "rosiglitazone", "pioglitazone", "Lobeglitazone", "documented heart failure"],
      "reasone": "Risk of exacerbation of heart failure.",
      "text": "Thiazolidenediones in patients with heart failure",
      "references": ["Germino FW. Noninsulin treatment of type 2 diabetes mellitus in geriatric patients: a review. Clin Ther 2011; 33(12): 1868-82. Review. PubMed PMID: 22136979.",
        "Lago RM, Singh PP, Nesto RW. Congestive heart failure and cardiovascular death in patients with prediabetes and type 2 diabetes given thiazolidinediones: a meta-analysis of randomised clinical trials. Lancet 2007; 370(9593): 1129-36. Review. PubMed PMID: 17905165."
      ],
      "exp": {
        "Thiazolidenediones": "rosiglitazone, pioglitazone, Lobeglitazone"
      }
    }, {
      "id": "J3",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Beta-blockers", "Propranolol", "Bucindolol", "Carteolol", "Carvedilol", "Labetalol", "Nadolol", "Oxprenolol", "Penbutolol", "Pindolol", "Sotalol", "Acebutolol", "Atenolol", "Betaxolol", "Bisoprolol", "Celiprolol", "Esmolol", "Metoprolol", "Nebivolol", "diabetes mellitus with frequent hypoglycaemic episodes"],
      "reasone": "Risk of suppressing hypoglycaemic symptoms.",
      "text": "Beta-blockers in diabetes mellitus with frequent hypoglycaemic episodes.",
      "references": ["Chelliah A, Burge MR. Hypoglycaemia in elderly patients with diabetes mellitus: causes and strategies for prevention. Drugs Aging 2004; 21(8): 511-30. Review. PubMed PMID: 15182216.",
        "British National Formulary vol. 61, March 2011: p 98."
      ],
      "exp": {
        "Beta-blockers": "Propranolol, Bucindolol, Carteolol, Carvedilol, Labetalol, Nadolol, Oxprenolol, Penbutolol, Pindolol, Sotalol, Acebutolol, Atenolol, Betaxolol, Bisoprolol, Celiprolol, Esmolol, Metoprolol, Nebivolol"
      }
    }, {
      "id": "J4",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Oestrogens", "Estradiol", "estrone", "estriol", "dehydroepiandrosterone", "androstenedione, androstenediol, androstanediol", "and androstanediol, hydroxyestrone  Ethinyl estradiol", "Premarin", "equilenin", "breast cancer", "venous thromboembolism"],
      "reasone": "Increased risk of recurrence.",
      "text": "Oestrogens with a history of breast cancer or venous thromboembolism",
      "references": ["Calle EE, Feigelson HS, Hildebrand JS, Teras LR, Thun MJ, Rodriguez C. Postmenopausal hormone use and breast cancer associations differ by hormone regimen and histologic subtype. Cancer 2009; 115(5): 936-45. Erratum in: Cancer 2009; 115(7): 1587. PubMed PMID: 19156895.",
        "Diergaarde B, Potter JD, Jupe ER, Manjeshwar S, Shimasaki CD, Pugh TW, Defreese DC, Gramling BA, Evans I, White E. Polymorphisms in genes involved in sex hormone metabolism, estrogen plus progestin hormone therapy use, and risk of postmenopausal breast cancer. Cancer Epidemiol Biomarkers Prev 2008; 17(7): 1751-9. PubMed PMID: 18628428."
      ],
      "exp": {
        "Oestrogens": "Estradiol, estrone, estriol, dehydroepiandrosterone, androstenedione, androstenediol, androstanediol, and androstanediol, hydroxyestrone  Ethinyl estradiol, Premarin, equilenin"
      }
    }, {
      "id": "J5",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Oestrogens", "Estradiol", "estrone", "estriol", "dehydroepiandrosterone", "androstenedione, androstenediol, androstanediol", "and androstanediol, hydroxyestrone  Ethinyl estradiol", "Premarin", "equilenin"],
      "reasone": "Risk of endometrial cancer.",
      "text": "Oral Oestrogens without progestogen in patients with intact uterus.",
      "references": ["Dick SE, DeWitt DE, Anawalt BD. Postmenopausal hormone replacement therapy and major clinical outcomes: a focus on cardiovascular disease, osteoporosis, dementia, and breast and endometrial neoplasia. Am J Manag Care 2002; 8(1): 95-104. Review. PubMed PMID: 11814176.",
        "Furness S, Roberts H, Marjoribanks J, Lethaby A. Hormone therapy in postmenopausal women and risk of endometrial hyperplasia. Cochrane Database Syst Rev 2012 Aug 15;8:CD000402. doi: 10.1002/14651858.CD000402.pub4. Review. PubMed PMID: 22895916.",
        "Marjoribanks J, Farquhar C, Roberts H, Lethaby A.  Long term hormone therapy for perimenopausal and postmenopausal women.  Cochrane Database Syst Rev 2012 Jul 11;7:CD004143. doi: 10.1002/14651858.CD004143.pub4. Review.  PubMed PMID: 22786488"
      ],
      "exp": {
        "Oestrogens": "Estradiol, estrone, estriol, dehydroepiandrosterone, androstenedione, androstenediol, androstanediol, and androstanediol, hydroxyestrone  Ethinyl estradiol, Premarin, equilenin"
      }
    }, {
      "id": "J6",
      "Section": "Section J: Endocrine System criteria",
      "terms": ["Androgens", "testosterone", "mesterolone", "methyltestosterone", "Fluoxymesterone", "Oxandrolone"],
      "reasone": "Risk of androgen toxicity; no proven benefit outside of hypogonadism indication.",
      "text": "Androgens in the absence of primary or secondary hypogonadism.",
      "references": ["Bhasin S, Cunningham GR, Hayes FJ, Matsumoto AM, Snyder PJ, Swerdloff RS,Montori VM; Task Force, Endocrine Society. Testosterone therapy in men withandrogen deficiency syndromes: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab 2010; 95(6): 2536-59. Review. PubMed PMID: 20525905.",
        "Kazi M, Geraci SA, Koch CA. Considerations for the diagnosis and treatment of testosterone deficiency in elderly men. Am J Med 2007; 120(10): 835-40.Review. PubMed PMID: 17904450."
      ],
      "exp": {
        "Androgens": "testosterone, mesterolone, methyltestosterone, Fluoxymesterone, Oxandrolone"
      }
    },
    // Section K
    {
      "id": "K1",
      "Section": "Section K: Drugs that predictably increase the risk of falls in older people",
      "terms": ["Benzodiazepines", "Adinazolam", "Alprazolam", "Bentazepam", "Bretazenil", "Bromazepam", "Brotizolam", "Camazepam", "Chlordiazepoxide", "Cinazepam", "Cinolazepam", "Clobazam", "Clonazepam", "Clonazolam", "Clorazepate", "Clotiazepam", "Cloxazolam", "Delorazepam", "diazepam", "Diclazepam", "Estazolam", "Ethyl carfluzepate", "Etizolam", "Ethyl loflazepate", "Flubromazepam", "Flubromazolam", "Flunitrazepam", "Flurazepam", "Flutazolam", "Flutoprazepam", "Halazepam", "Ketazolam", "Loprazolam", "Lorazepam", "Lormetazepam", "Medazepam", "Mexazolam", "Midazolam", "Nifoxipam", "Nimetazepam", "Nitrazepam", "Nordiazepam", "Oxazepam", "Phenazepam", "Pinazepam", "Prazepam", "Premazepam", "Pyrazolam", "Quazepam", "Rilmazafone", "Temazepam", "Thienalprazolam", "Tetrazepam", "Triazolam"],
      "reasone": "Sedative, may cause reduced sensorium, impair balance.",
      "text": "Benzodiazepines",
      "references": ["Huang AR, Mallet L, Rochefort CM, Eguale T, Buckeridge DL, Tamblyn R. Medication-related falls in the elderly: causative factors and preventive strategies. Drugs Aging 2012; 29(5): 359-76. Review. PubMed PMID: 22550966.",
        "Woolcott JC, Richardson KJ, Wiens MO, Patel B, Marin J, Khan KM, Marra CA. Meta-analysis of the impact of 9 medication classes on falls in elderly persons.  Arch Intern Med 2009; 169(21): 1952-60. Review. Erratum in: Arch Intern Med 2010 Mar 8;170(5):477. PubMed PMID: 19933955."
      ],
      "exp": {
        "Benzodiazepines": "Adinazolam, Alprazolam, Bentazepam, Bretazenil, Bromazepam, Brotizolam, Camazepam, Chlordiazepoxide, Cinazepam, Cinolazepam, Clobazam, Clonazepam, Clonazolam, Clorazepate, Clotiazepam, Cloxazolam, Delorazepam, diazepam, Diclazepam, Estazolam, Ethyl carfluzepate, Etizolam, Ethyl loflazepate, Flubromazepam, Flubromazolam, Flunitrazepam, Flurazepam, Flutazolam, Flutoprazepam, Halazepam, Ketazolam, Loprazolam, Lorazepam, Lormetazepam, Medazepam, Mexazolam, Midazolam, Nifoxipam, Nimetazepam, Nitrazepam, Nordiazepam, Oxazepam, Phenazepam, Pinazepam, Prazepam, Premazepam, Pyrazolam, Quazepam, Rilmazafone, Temazepam, Thienalprazolam, Tetrazepam, Triazolam",
      }
    }, {
      "id": "K2",
      "Section": "Section K: Drugs that predictably increase the risk of falls in older people",
      "terms": ["Neuroleptic", "Chlorpromazine", "Chlorprothixene", "Levomepromazine", "Mesoridazine", "Periciazine", "Promazine", "Thioridazine", "Loxapine", "Molindone", "Perphenazine", "Thiothixene", "Droperidol", "Flupentixol", "Fluphenazine", "Haloperidol", "Pimozide", "Prochlorperazine", "Thioproperazine", "Trifluoperazine", "Zuclopenthixol", "Pimozide", "Prochlorperazine", "Benperidol", "Bromperidol", "Droperidol", "Timiperone", "Fluspirilene", "Penfluridol", "Chlorpromazine", "Cyamemazine", "Dixyrazine", "Fluphenazine", "Levomepromazine", "Perazine", "Pericyazine", "Perphenazine", "Pipotiazine", "Prochlorperazine", "Promethazine", "Prothipendyl,Trifluoperazine", "Chlorprothixene", "Clopenthixol", "Flupentixol", "Thiothixene", "Zuclopenthixol", "Clotiapine", "Loxapine", "Prothipendyl", "Carpipramine", "Clocapramine", "Molindone", "Mosapramine", "Sulpiride", "Sultopride", "Veralipride", "Amisulpride", "Aripiprazole", "Asenapine", "Blonanserin", "Iloperidone", "Lurasidone", "Melperone", "Olanzapine", "Paliperidone", "Risperidone", "Sertindole", "Sulpiride", "Ziprasidone", "Zotepine"],
      "reasone": "May cause gait dyspraxia, Parkinsonism.",
      "text": "Neuroleptic drugs",
      "references": ["Hill KD, Wee R. Psychotropic drug-induced falls in older people: a review of interventions aimed at reducing the problem.  Drugs Aging 2012; 29(1): 15-30. Review. PubMed PMID: 22191720.",
        "Woolcott JC, Richardson KJ, Wiens MO, Patel B, Marin J, Khan KM, Marra CA. Meta-analysis of the impact of 9 medication classes on falls in elderly persons. Arch Intern Med 2009; 169(21): 1952-60. Review. Erratum in: Arch Intern Med 2010; 170(5): 477. PubMed PMID: 19933955."
      ],
      "exp": {
        "Neuroleptic": "Chlorpromazine, Chlorprothixene, Levomepromazine, Mesoridazine, Periciazine, Promazine, Thioridazine, Loxapine, Molindone, Perphenazine, Thiothixene, Droperidol, Flupentixol, Fluphenazine, Haloperidol, Pimozide, Prochlorperazine, Thioproperazine, Trifluoperazine, Zuclopenthixol, Pimozide, Prochlorperazine, Benperidol, Bromperidol, Droperidol, Timiperone, Fluspirilene, Penfluridol, Chlorpromazine, Cyamemazine, Dixyrazine, Fluphenazine, Levomepromazine, Perazine, Pericyazine, Perphenazine, Pipotiazine, Prochlorperazine, Promethazine, Prothipendyl,Trifluoperazine, Chlorprothixene, Clopenthixol, Flupentixol, Thiothixene, Zuclopenthixol, Clotiapine, Loxapine, Prothipendyl, Carpipramine, Clocapramine, Molindone, Mosapramine, Sulpiride, Sultopride, Veralipride, Amisulpride, Aripiprazole, Asenapine, Blonanserin, Iloperidone, Lurasidone, Melperone, Olanzapine, Paliperidone, Risperidone, Sertindole, Sulpiride, Ziprasidone, Zotepine"
      }
    }, {
      "id": "K3",
      "Section": "Section K: Drugs that predictably increase the risk of falls in older people",
      "terms": ["Vasodilator drugs", "alpha-1 receptor blockers", "calcium channel blockers", "Alfuzosin", "Prazosin", "Doxazosin", "Tamsulosin", "Terazosin", "Silodosin", "Amlodipine", "Aranidipine", "Azelnidipine", "Barnidipine", "Benidipine", "Cilnidipine", "Clevidipine", "Isradipine", "Efonidipine", "Felodipine", "Lacidipine", "Lercanidipine", "Manidipine", "Nicardipine", "Nifedipine", "Nilvadipine", "Nimodipine", "Nisoldipine", "Nitrendipine", "Pranidipine ", "Verapamil", "Gallopamil", "Fendiline", "diltiazem", "long acting glyceryl trinitrate", "(long acting nitroglycerine)", "isosorbide mononitrate and dinitrate", "itramin", "pentaerithrityl tetranitrate", "propatylnitrate", "tenitramine", "trolnitrate", "Captopril", "Zofenopril", "Enalapril", "Ramipril", "Quinapril", "Perindopril", "Lisinopril", "Benazepril", "Imidapril", "Trandolapril", "Cilazapril", "Fosinopril", "Moexipril", "Trandopril", "Azilsartan", "candesartan", "eprosartan", "irbesartan", "losartan", "olmesartan", "telmisartan", "valsartan", "eprosartan", "long-acting nitrates", "ACE inhibitors", "Angiotensin Receptor Blockers", "minoxidil", "hydralazine", "eprosartan),diazoxide"],
      "reasone": "Risk of syncope, falls.",
      "text": "Vasodilator drugs (e.g. alpha-1 receptor blockers, calcium channel blockers, long-acting nitrates, ACE inhibitors, Angiotensin Receptor Blockers, diazoxide, minoxidil, or hydralazine) with persistent postural hypotension i.e. recurrent drop in systolic blood pressure ≥ 20mmHg",
      "references": ["Aronow WS. Treating hypertension in older adults: safety considerations. Drug Saf 2009; 32(2): 111-8. PMID: 19236118",
        "Verhaeverbeke I, Mets T. Drug-induced orthostatic hypotension in the elderly:  avoiding its onset. Drug Saf 1997; 17(2): 105-18. Review. PubMed PMID: 9285201."
      ],
      "exp": {
        "alpha-1 receptor blockers": "Alfuzosin, Prazosin, Doxazosin, Tamsulosin, Terazosin, Silodosin",
        "calcium channel blockers": "Amlodipine, Aranidipine, Azelnidipine, Barnidipine, Benidipine, Cilnidipine, Clevidipine, Isradipine, Efonidipine, Felodipine, Lacidipine, Lercanidipine, Manidipine, Nicardipine, Nifedipine, Nilvadipine, Nimodipine, Nisoldipine, Nitrendipine, Pranidipine , Verapamil, Gallopamil, Fendiline, diltiazem",
        "long-acting nitrates": "long acting glyceryl trinitrate, (long acting nitroglycerine), isosorbide mononitrate and dinitrate, itramin, pentaerithrityl tetranitrate, propatylnitrate, tenitramine, trolnitrate",
        "ACE inhibitors": "Captopril, Zofenopril, Enalapril, Ramipril, Quinapril, Perindopril, Lisinopril, Benazepril, Imidapril, Trandolapril, Cilazapril, Fosinopril, Moexipril, Trandopril",
        "Angiotensin Receptor Blockers": "Azilsartan, candesartan, eprosartan, irbesartan, losartan, olmesartan, telmisartan, valsartan, eprosartan"

      }
    }, {
      "id": "K4",
      "Section": "Section K: Drugs that predictably increase the risk of falls in older people",
      "terms": ["Hypnotic Z-drugs", "zopiclone", "zolpidem", "zaleplon", "zolon", "zopim", "eszopiclone"],
      "reasone": "May cause protracted daytime sedation, ataxia.",
      "text": "Hypnotic Z-drugs",
      "references": ["Mets MA, Volkerts ER, Olivier B, Verster JC.  Effect of hypnotic drugs on body balance and standing steadiness. Sleep Med Rev 2010; 14(4): 259-67. PubMed PMID: 20171127.",
        "Shuto H, Imakyure O, Matsumoto J, Egawa T, Jiang Y, Hirakawa M, Kataoka Y, Yanagawa T. Medication use as a risk factor for inpatient falls in an acute care hospital: a case-crossover study. Br J Clin Pharmacol 2010; 69(5): 535-42. PubMed PMID: 20573090."
      ],
      "exp": {
        "Hypnotic Z-drugs": "zopiclone, zolpidem, zaleplon, zolon, zopim, eszopiclone"

      }
    },
    // Section L:
    {
      "id": "L1",
      "Section": "Section L: Analgesic Drugs",
      "terms": ["strong opioids", "morphine", "oxycodone", "fentanyl", "buprenorphine", "diamorphine", "methadone", "tramadol", "pethidine", "pentazocine", "mild pain"],
      "reasone": "WHO analgesic ladder not observed.",
      "text": "Use of oral or transdermal strong opioids as first line therapy for mild pain",
      "references": ["World Health Organization (WHO). Cancer pain relief. With a guide to opioid availability, 2nd ed. Geneva 1996: WHO. ISBN 92-4-154482-1.",
        "Scoping Document for WHO Guidelines for the pharmacological treatment of persisting pain in adults with medical illnesses, Geneva 2012, GRC-08-04-0052A, p 9. http://www.who.int/medicines/areas/quality_safety/Scoping_WHO_GLs_PersistPainAdults_webversion.pdf; accessed Dec 28, 2012."
      ],
      "exp": {
        "strong opioids": "morphine, oxycodone, fentanyl, buprenorphine, diamorphine, methadone, tramadol, pethidine, pentazocine"

      }
    }, {
      "id": "L2",
      "Section": "Section L: Analgesic Drugs",
      "terms": ["regular opioids", "morphine", "codeine", "thebaine", "diacetylmorphine", "nicomorphine", "dipropanoylmorphine", "desomorphine", "acetylpropionylmorphine", "dibenzoylmorphine", "diacetyldihydromorphine", "hydromorphone", "hydrocodone", "oxycodone", "oxymorphone", "ethylmorphine", "buprenorphine", "fentanyl", "pethidine", "levorphanol", "methadone", "tramadol", "dextropropoxyphene", "endorphins", "enkephalins", "dynorphins", "endomorphins", "meperidine"],
      "reasone": "Risk of severe constipation.",
      "text": "Use of regular opioids (as distinct from PRN) without concomitant laxative.",
      "references": ["Forman WB. Opioid analgesic drugs in the elderly. Clin Geriatr Med 1996; 12(3): 489-500. Review. PubMed PMID: 8853941",
        "Kalso E, Edwards JE, Moore RA, McQuay HJ. Opioids in chronic non-cancer pain:  systematic review of efficacy and safety. Pain 2004; 112(3): 372-80. PubMed PMID: 15561393."
      ],
      "exp": {
        "regular opioids": "morphine, codeine, thebaine, diacetylmorphine, nicomorphine, dipropanoylmorphine, desomorphine, acetylpropionylmorphine, dibenzoylmorphine, diacetyldihydromorphine, hydromorphone, hydrocodone, oxycodone, oxymorphone, ethylmorphine, buprenorphine, fentanyl, pethidine, levorphanol, methadone, tramadol, dextropropoxyphene, endorphins, enkephalins, dynorphins, endomorphins, meperidine"
      }
    }, {
      "id": "L3",
      "Section": "Section L: Analgesic Drugs",
      "terms": ["Long-acting opioids", "short-acting opioids", "break-through pain", "morphine", "codeine", "thebaine", "diacetylmorphine", "nicomorphine", "dipropanoylmorphine", "desomorphine", "acetylpropionylmorphine", "dibenzoylmorphine", "diacetyldihydromorphine", "hydromorphone", "hydrocodone", "oxycodone", "oxymorphone", "ethylmorphine", "buprenorphine", "fentanyl", "pethidine", "levorphanol", "methadone", "tramadol", "dextropropoxyphene", "endorphins", "enkephalins", "dynorphins", "endomorphins", "meperidine", "codeine", "fentanyl", "hydrocodone", "hydromorphone", "morphine", "oxycodone", "tramadol", "tepentadol", "levorphanol", "methadone", "oxymorphone", "propoxyphene", "buprenorphine", "Butorphanol", "Dihydrocodeine", "Meperidine", "Oxycodone"],
      "reasone": "Risk of non-control of severe pain.",
      "text": "Long-acting opioids without short-acting opioids for break-through pain.",
      "references": ["Johnson AG, Seideman P, Day RO. Adverse drug interactions with nonsteroidal anti-inflammatory drugs (NSAIDs). Recognition, management and avoidance. Drug Saf 1993; 8(2): 99-127. Review. PubMed PMID: 8452660.",
        "Zullo A, Hassan C, Campo SM, Morini S. Bleeding peptic ulcer in the elderly: risk factors and prevention strategies.  Drugs Aging 2007; 24(10): 815-28. Review. PubMed PMID: 17896831.",
        "Peng S, Duggan A. Gastrointestinal adverse effects of non-steroidal anti-inflammatory drugs. Expert Opin Drug Saf 2005; 4(2): 157-69. Review. PubMed PMID: 15794710.",
        "Peura DA. Prevention of nonsteroidal anti-inflammatory drug-associated gastrointestinal symptoms and ulcer complications. Am J Med 2004; 117 Suppl 5A: 63S-71S. Review. PubMed PMID: 15478855."
      ],
      "exp": {
        "Long-acting opioids": "morphine, codeine, thebaine, diacetylmorphine, nicomorphine, dipropanoylmorphine, desomorphine, acetylpropionylmorphine, dibenzoylmorphine, diacetyldihydromorphine, hydromorphone, hydrocodone, oxycodone, oxymorphone, ethylmorphine, buprenorphine, fentanyl, pethidine, levorphanol, methadone, tramadol, dextropropoxyphene, endorphins, enkephalins, dynorphins, endomorphins, meperidine",
        "short-acting opioids": "codeine, fentanyl, hydrocodone, hydromorphone, morphine, oxycodone, tramadol, tepentadol, levorphanol, methadone, oxymorphone, propoxyphene, buprenorphine, Butorphanol, Dihydrocodeine, Meperidine, Oxycodone"
      }
    },
    // Section M
    {
      "id": "M1",
      "Section": "Section M: Antimuscarinic/anticholinergic drug burden",
      "terms": ["bladder antispasmodics", "intestinal antispasmodics", "tricyclic antidepressants", "first generation antihistamines", "Hyoscyamine", "oxybutynin", "darifenacin", "Emepronium", "Fesoterodine", "Flavoxate", "Imidafenacin", "Solifenacin", "Propiverine", "Tolterodine", "Trospium", "Terodiline", "Darifenacin", "atropine", "hyoscyamine", "Scopolamine (Hyoscine)", "Pirenzepine", "Dicycloverine", "belladonna alkaloids", "Propantheline", "clidinium", "dicyclomine", "methscopolamine", "clomipramine", "imipramine", "desipramine", "dibenzepin", "lofepramine", "nortriptyline", "protriptyline", "amitriptyline", "amitriptylinoxide", "amoxapine", "butriptyline", "demexiptiline", "dimetacrine", "dosulepin", "doxepin", "imipraminoxide", "melitracen", "metapramine", "nitroxazepine", "noxiptiline", "pipofezine", "propizepine", "quinupramine", "amineptine", "iprindole", "opipramol", "tianeptine", "trimipramine", "Mepyramine", "pyrilamine", "Antazoline", "Tripelennamine", "Diphenhydramine", "Carbinoxamine", "Doxylamine", "Orphenadrine", "Bromazine", "Clemastine", "Dimenhydrinate", "Pheniramine", "Chlorphenamine", "chlorpheniramine", "Dexchlorpheniramine", "Dexbrompheniramine", "Brompheniramine", "Triprolidine", "Dimetindene", "Cyclizine", "Chlorcyclizine", "Hydroxyzine", "Meclizine", "Promethazine", "Alimemazine", "trimeprazine", "Cyproheptadine", "Azatadine", "Ketotifen", "antimuscarinic/anticholinergic"],
      "reasone": "Risk of increased antimuscarinic/anticholinergic toxicity.",
      "text": "Concomitant use of two or more drugs with antimuscarinic/anticholinergic properties (e.g. bladder antispasmodics, intestinal antispasmodics, tricyclic antidepressants, first generation antihistamines)",
      "references": ["Feinberg M. The problems of anticholinergic adverse effects in older patients. Drugs Aging 1993; 3(4): 335-48. Review. PubMed PMID: 8369593.",
        "Gerretsen P, Pollock BG. Drugs with anticholinergic properties: a current perspective on use and safety. Expert Opin Drug Saf 2011; 10(5): 751-65. Review. PubMed PMID: 21635190.",
        "Karimi S, Dharia SP, Flora DS, Slattum PW. Anticholinergic burden: clinical implications for seniors and strategies for clinicians. Consult Pharm 2012; 27(8): 564-82. Review. PubMed PMID: 22910177.",
      ],
      "exp": {
        "bladder antispasmodics": "Hyoscyamine, oxybutynin, darifenacin, Emepronium, Fesoterodine, Flavoxate, Imidafenacin, Solifenacin, Propiverine, Tolterodine, Trospium, Terodiline, Darifenacin",
        "intestinal antispasmodics": "atropine, hyoscyamine, Scopolamine (Hyoscine), Pirenzepine, Dicycloverine, belladonna alkaloids, Propantheline, clidinium, dicyclomine, methscopolamine",
        "tricyclic antidepressants": "clomipramine, imipramine, desipramine, dibenzepin, lofepramine, nortriptyline, protriptyline, amitriptyline, amitriptylinoxide, amoxapine, butriptyline, demexiptiline, dimetacrine, dosulepin, doxepin, imipraminoxide, melitracen, metapramine, nitroxazepine, noxiptiline, pipofezine, propizepine, quinupramine, amineptine, iprindole, opipramol, tianeptine, trimipramine",
        "first generation antihistamines": "Mepyramine, pyrilamine, Antazoline, Tripelennamine, Diphenhydramine, Carbinoxamine, Doxylamine, Orphenadrine, Bromazine, Clemastine, Dimenhydrinate, Pheniramine, Chlorphenamine, chlorpheniramine, Dexchlorpheniramine, Dexbrompheniramine, Brompheniramine, Triprolidine, Dimetindene, Cyclizine, Chlorcyclizine, Hydroxyzine, Meclizine, Promethazine, Alimemazine, trimeprazine, Cyproheptadine, Azatadine, Ketotifen"
      }
    },
  ],
  start: [
    //Section A
    {
      "id": "A1",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Vitamin K antagonists", "direct thrombin inhibitors", "factor Xa inhibitors", "chronic atrial fibrillation"],
      "reasone": null,
      "text": "Vitamin K antagonists or direct thrombin inhibitors or factor Xa inhibitors in the presence of chronic atrial fibrillation.",
      "references": ["Hughes M, Lip GY; Guideline Development Group, National Clinical Guideline forManagement of Atrial Fibrillation in Primary and Secondary Care, NationalInstitute for Health and Clinical Excellence. Stroke and thromboembolism inatrial fibrillation: a systematic review of stroke risk factors, riskstratification schema and cost effectiveness data. Thromb Haemost 2008; 99(2): 295-304Review. PubMed PMID: 18278178.",
        "Dentali F, Riva N, Crowther M, Turpie AG, Lip GY, Ageno W. Efficacy and safetyof the novel oral anticoagulants in atrial fibrillation: a systematic review and meta-analysis of the literature. Circulation 2012; 126(20): 2381-91. Review. PubMed PMID:23071159.",
        "Hart RG, Pearce LA, Aguilar MI. Meta-analysis: antithrombotic therapy to prevent stroke in patients who have non-valvular atrial fibrillation. Ann Intern Med 2007; 146(12): 857-67. PubMed PMID: 17577005.",
        "Aguilar MI, Hart R. Oral anticoagulants for preventing stroke in patients with non-valvular atrial fibrillation and no previous history of stroke or transient ischemic attacks. Cochrane Database of Systematic Reviews 2005, Issue 3. Art. No.: CD001927. DOI: 10.1002/14651858.CD001927.pub2."
      ],
    }, {
      "id": "A2",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Aspirin", "chronic atrial fibrillation"],
      "reasone": null,
      "text": "Aspirin (75 mg – 160 mg once daily) in the presence of chronic atrial fibrillation, where Vitamin K antagonists or direct thrombin inhibitors or factor Xa inhibitors are contraindicated.",
      "references": ["Lip GY. The role of aspirin for stroke prevention in atrial fibrillation. Nat Rev Cardiol 2011; 8(10): 602-6. PubMedPMID: 21788962.",
        "Cairns JA, Connolly S, McMurtry S, Stephenson M, Talajic M; CCS AtrialFibrillation Guidelines Committee. Canadian Cardiovascular Society atrialfibrillation guidelines 2010: prevention of stroke and systemic thromboembolismin atrial fibrillation and flutter. Can J Cardiol 2011; 27(1): 74-90. PubMed PMID: 21329865.",
        "Gage BF, van Walraven C, Pearce L, Hart RG, Koudstaal PJ, Boode BS, PetersenP. Selecting patients with atrial fibrillation for anticoagulation: stroke risk stratification in patients taking aspirin. Circulation 2004; 110(16): 2287-92. PubMed PMID: 15477396.",
        "Ezekowitz MD, Levine JA. Preventing stroke in patients with atrial fibrillation. JAMA 1999; 281(19): 1830-5. PubMed PMID: 10340371."
      ],
    }, {
      "id": "A3",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Antiplatelet therapy", "coronary", "cerebral", "peripheral vascular disease", "aspirin", "clopidogrel", "prasugrel", "ticagrelor", "cerebral", "angina, myocardial infarction", "stroke", "claudication"],
      "reasone": null,
      "text": "Antiplatelet therapy (aspirin or clopidogrel or prasugrel or ticagrelor) with a documented history of coronary, cerebral, or peripheral vascular disease.",
      "references": ["Zuckerman IH, Yin X, Rattinger GB, Gottlieb SS, Simoni-Wastila L, Pierce SA,Huang TY, Shenolikar R, Stuart B. Effect of exposure to evidence-based pharmacotherapy on outcomes after acute myocardial infarction in older adults. J Am Geriatr Soc 2012; 60(10): 1854-61. PubMed PMID: 23003000.",
        "Alonso-Coello P, Bellmunt S, McGorrian C, Anand SS, Guzman R, Criqui MH, AklEA, Olav Vandvik P, Lansberg MG, Guyatt GH, Spencer FA; American College of Chest Physicians. Antithrombotic therapy in peripheral artery disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest 2012; 141(2Suppl): e669S-90S. PubMed PMID: 22315275.",
        "Fleg JL, Aronow WS, Frishman WH. Cardiovascular drug therapy in the elderly: benefits and challenges. Nat Rev Cardiol 2011; 8(1): 13-28. Review. PubMed PMID: 20978470.",
        "Vandvik PO, Lincoff AM, Gore JM, Gutterman DD, Sonnenberg FA, Alonso-Coello P,Akl EA, Lansberg MG, Guyatt GH, Spencer FA; American College of Chest Physicians. Primary and secondary prevention of cardiovascular disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of ChestPhysicians Evidence-Based Clinical Practice Guidelines. Chest 2012; 141(2Suppl): e637S-68S. Erratum in: Chest 2012; 141(4): 1129. Dosage error in article text. PubMed PMID: 22315274."
      ],
      "exp": {
        "coronary": "angina, myocardial infarction",
        "cerebral": "stroke",
        "peripheral vascular disease": "claudication"
      }
    }, {
      "id": "A4",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Antihypertensive"],
      "reasone": null,
      "text": "Antihypertensive therapy where systolic blood pressure consistently > 160 mmHg and/or diastolic blood pressure consistently > 90 mmHg; if systolic blood pressure > 140 mmHg and /or diastolic blood pressure > 90 mmHg, if diabetic.",
      "references": ["Williams B, Poulter NR, Brown MJ, Davis M, McInnes GT, Potter JF, Sever PS,Thom SM; BHS guidelines working party, for the British Hypertension Society.British Hypertension Society guidelines for hypertension management 2004 (BHS-IV): summary. BMJ 2004; 328(7440):634-40. Erratum in: BMJ 2004; 328(7445): 926. PubMed PMID: 15016698.",
        "Papademetriou V, Farsang C, Elmfeldt D, Hofman A, Lithell H, Olofsson B, Skoog I, Trenkwalder P, Zanchetti A; Study on Cognition and Prognosis in the Elderly study group. Stroke prevention with the angiotensin II type 1-receptor blocker candesartan in elderly patients with isolated systolic hypertension: the Study on Cognition and Prognosis in the Elderly (SCOPE). J Am Coll Cardiol 2004; 44(6): 1175-80. PubMed PMID: 15364316.",
        "Bejan-Angoulvant T, Saadatian-Elahi M, Wright JM, Schron EB, Lindholm LH, Fagard R, Staessen JA, Gueyffier F. Treatment of hypertension in patients 80years and older: the lower the better? A meta-analysis of randomized controlled trials. J Hypertens 2010; 28(7): 1366-72. PubMed PMID: 20574244.",
      ],
    }, {
      "id": "A5",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["coronary", "Statin", "cerebral", "peripheral vascular disease", "angina", "myocardial infarction", "stroke", "claudication"],
      "reasone": null,
      "text": "Statin therapy with a documented history of coronary, cerebral, or peripheral vascular disease, unless the patient’s status is end-of-life or age is > 85 years.",
      "references": ["Mills EJ, Wu P, Chong G, Ghement I, Singh S, Akl EA, Eyawo O, Guyatt G,Berwanger O, Briel M. Efficacy and safety of statin treatment for cardiovascular disease: a network meta-analysis of 170,255 patients from 76 randomized trials. QJM 2011; 104(2): 109-24. Review. PubMed PMID: 20934984.",
        "Brugts JJ, Yetgin T, Hoeks SE, Gotto AM, Shepherd J, Westendorp RG, de CraenAJ, Knopp RH, Nakamura H, Ridker P, van Domburg R, Deckers JW. The benefits of statins in people without established cardiovascular disease but with cardiovascular risk factors: meta-analysis of randomised controlled trials. BMJ 2009; 338: b2376. Review. PubMed PMID: 19567909.",
        "Amarenco P, Labreuche J. Lipid management in the prevention of stroke: review and updated meta-analysis of statins for stroke prevention. Lancet Neurol 2009; 8(5): 453-63. Review. PubMed PMID:19375663.",
      ],
      "exp": {
        "coronary": "angina, myocardial infarction",
        "cerebral": "stroke",
        "peripheral vascular disease": "claudication"
      }
    }, {
      "id": "A6",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Angiotensin Converting Enzyme (ACE) inhibitor", "systolic heart failure", "coronary artery disease", "angina", "myocardial infarction"],
      "reasone": null,
      "text": "Angiotensin Converting Enzyme (ACE) inhibitor with systolic heart failure and/or documented coronary artery disease",
      "references": ["Fleg JL, Aronow WS, Frishman WH. Cardiovascular drug therapy in the elderly: benefits and challenges. Nat Rev Cardiol 2011; 8(1):13-28. Review. PubMed PMID: 20978470.",
        "Arif SA, Mergenhagen KA, Del Carpio RO, Ho C. Treatment of systolic heartfailure in the elderly: an evidence-based review. Ann Pharmacother 2010; 44(10): 1604-14. Review. PubMed PMID: 20841514.",
        "Lahoud R, Howe M, Krishnan SM, Zacharias S, Jackson EA. Effect of use of combination evidence-based medical therapy after acute coronary syndromes on long-term outcomes. Am J Cardiol 2012; 109(2): 159-64. PubMed PMID: 22011560.",
        "Dagenais GR, Pogue J, Fox K, Simoons ML, Yusuf S. Angiotensin-converting-enzyme inhibitors in stable vascular disease without left ventricular systolic dysfunction or heart failure: a combined analysis of three trials. Lancet 2006; 368(9535): 581-8. Review. PubMed PMID: 16905022.",
        "Danchin N, Cucherat M, Thuillez C, Durand E, Kadri Z, Steg PG. Angiotensin-converting enzyme inhibitors in patients with coronary artery disease and absence of heart failure or left ventricular systolic dysfunction: an overview of long-term randomized controlled trials. Arch Intern Med 2006; 166(7): 787-96. PubMed PMID: 16606817.",
        "McAlister FA; Renin Angiotension System Modulator Meta-Analysis Investigators. Angiotensin-converting enzyme inhibitors or angiotensin receptor blockers are beneficial in normotensive atherosclerotic patients: a collaborative meta-analysis of randomized trials. Eur Heart J 2012; 33(4): 505-14. PubMed PMID: 22041554."
      ],
      "exp": {
        "coronary artery disease": "angina, myocardial infarction"
      }
    }, {
      "id": "A7",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["ischaemic heart disease", "Beta-blocker", "angina", "myocardial infarction"],
      "reasone": null,
      "text": "Beta-blocker with ischaemic heart disease.",
      "references": ["Gibbons RJ, Abrams J, Chatterjee K, Daley J, Deedwania PC, Douglas JS,Ferguson TB Jr, Fihn SD, Fraker TD Jr, Gardin JM, O'Rourke RA, Pasternak RC,Williams SV, Gibbons RJ, Alpert JS, Antman EM, Hiratzka LF, Fuster V, Faxon DP,Gregoratos G, Jacobs AK, Smith SC Jr; American College of Cardiology; American Heart Association Task Force on Practice Guidelines. Committee on the Management of Patients With Chronic Stable Angina. ACC/AHA 2002 guideline update for the management of patients with chronic stable angina - summary article: a report of the American College of Cardiology/American Heart Association Task Force on Practice Guidelines (Committee on the Management of Patients With Chronic Stable Angina). Circulation 2003 ; 107(1): 149-58. PubMed PMID: 12515758.",
        "Bangalore S, Messerli FH, Kostis JB, Pepine CJ. Cardiovascular protection using beta-blockers: a critical review of the evidence. J Am Coll Cardiol 2007;  50(7): 563-72. Review. PubMed PMID: 17692739.",
        "Rasmussen JN, Chong A, Alter DA. Relationship between adherence to evidence-based pharmacotherapy and long-term mortality after acute myocardial infarction. JAMA 2007 ; 297(2): 177-86. PubMed PMID: 17213401.",
        "Everly MJ, Heaton PC, Cluxton RJ Jr. Beta-blocker underuse in secondary prevention of myocardial infarction. Ann Pharmacother 2004; 38(2): 286-93.Review. PubMed PMID: 14742768."
      ],
      "exp": {
        "ischaemic heart disease": "angina, myocardial infarction"
      }
    }, {
      "id": "A8",
      "Section": "Section A: Cardiovascular System criteria",
      "terms": ["Appropriate beta-blocker", "bisoprolol", "nebivolol", "metoprolol", "carvedilol", "stable systolic heart failure"],
      "reasone": null,
      "text": "Appropriate beta-blocker with stable systolic heart failure.",
      "references": ["Ambrosio G, Flather MD, Böhm M, Cohen-Solal A, Murrone A, Mascagni F, Spinucci G, Conti MG, van Veldhuisen DJ, Tavazzi L, Coats AJ. β-blockade with nebivolol for prevention of acute ischaemic events in elderly patients with heart failure. Heart 2011; 97(3): 209-14. PubMed PMID: 21138861.",
        "Lipsic E, van Veldhuisen DJ. Nebivolol in chronic heart failure: current evidence and future perspectives. Expert Opin Pharmacother 2010; 11(6): 983-92. Review. PubMed PMID: 20307222.",
        "Tangeman HJ, Patterson JH. Extended-release metoprolol succinate in chronic heart failure. Ann Pharmacother 2003; 37(5): 701-10. Review. PubMed PMID:12708950."
      ],
      "exp": {
        "Appropriate beta-blocker": "bisoprolol, nebivolol, metoprolol, or carvedilol"
      }
    },
    // Section B
    {
      "id": "B1",
      "Section": "Section B: Respiratory System criteria",
      "terms": ["mild to moderate asthma", "COPD", "inhaled beta 2 agonist", "antimuscarinic bronchodilator", "ipratropium", "tiotropium"],
      "reasone": null,
      "text": "Regular inhaled beta 2 agonist or antimuscarinic bronchodilator (e.g. ipratropium, tiotropium) for mild to moderate asthma or COPD.",
      "references": ["Pauwels RA, Buist AS, Ma P, Jenkins CR, Hurd SS; GOLD Scientific Committee. Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease: National Heart, Lung, and Blood Institute and World Health Organization Global Initiative for Chronic Obstructive Lung Disease (GOLD): executive summary. Respir Care 2001; 46(8): 798-825. Review. PubMed PMID: 11463370.",
        "Keating GM. Tiotropium bromide inhalation powder: a review of its use in the management of chronic obstructive pulmonary disease. Drugs 2012; 72(2):273-300. Review. PubMed PMID: 22217233.",
        "Yohannes AM, Hardy CC. Treatment of chronic obstructive pulmonary disease in older patients: a practical guide. Drugs Aging 2003; 20(3): 209-28. Review. PubMed PMID: 12578401.",
        "McCrory DC, Brown CD. Anticholinergic bronchodilators versus beta2-sympathomimetic agents for acute exacerbations of chronic obstructive pulmonary disease Editorial Group: Cochrane Airways Group Published Online: 8 OCT 2008. Assessed as up-to-date: 3 OCT 2005 DOI: 10.1002/14651858.CD003900",
      ]
    }, {
      "id": "B2",
      "Section": "Section B: Respiratory System criteria",
      "terms": ["inhaled corticosteroid", "moderate-severe asthma", "COPD"],
      "reasone": null,
      "text": "Regular inhaled corticosteroid for moderate-severe asthma or COPD, where FEV1 <50% of predicted value and repeated exacerbations requiring treatment with oral corticosteroids.",
      "references": ["Spencer S, Evans DJ, Karner C, Cates CJ.Inhaled corticosteroids versus long-acting beta 2-agonists for chronic obstructive pulmonary disease. Cochrane Database Syst Rev. 2011 Oct 5;(10):CD007033. doi: 10.1002/14651858.CD007033.pub2. Review. Update in: Cochrane Database Syst Rev 2011; (12):CD007033. PubMed PMID: 21975759.",
        "Gaebel K, McIvor RA, Xie F, Blackhouse G, Robertson D, Assasi N, Hernandez P, Goeree R. Triple therapy for the management of COPD: a review. COPD 2011; 8(3): 206-43. Review. PubMed PMID: 21513437.",
        "Sutherland ER, Allmers H, Ayas NT, Venn AJ, Martin RJ. Inhaled corticosteroids reduce the progression of airflow limitation in chronic obstructive pulmonary disease: a meta-analysis. Thorax 2003; 58(11): 937-41. PubMed PMID: 14586043."
      ]
    }, {
      "id": "B3",
      "Section": "Section B: Respiratory System criteria",
      "terms": ["continuous oxygen", "chronic hypoxaemia"],
      "reasone": null,
      "text": "Home continuous oxygen with documented chronic hypoxaemia (i.e. pO2 < 8.0 kPa or 60 mmHg or SaO2 < 89%).",
      "references": ["Cranston JM, Crockett AJ, Moss JR, Alpers JH. Domiciliary oxygen for chronic obstructive pulmonary disease. Cochrane Database Syst Rev 2005 Oct 19; (4):CD001744. Review. PubMed PMID: 16235285.",
        "Weitzenblum E, Chaouat A, Kessler R. [Long-term oxygen therapy for chronic respiratory failure. Rationale, indications, modalities]. Rev Pneumol Clin 2002; 58(4 Pt 1): 195-212. Review. French. PubMed PMID: 12407284.",
      ]
    },
    // Section C
    {
      "id": "C1",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["L-DOPA", "dopamine agonist", "idiopathic Parkinson’s disease"],
      "reasone": null,
      "text": "L-DOPA or a dopamine agonist in idiopathic Parkinson’s disease with functional impairment and resultant disability.",
      "references": ["Marjama-Lyons JM, Koller WC. Parkinson's disease. Update in diagnosis and symptom management. Geriatrics 2001; 56(8): 24-5, 29-30, 33-5. Review. PubMed PMID: 11505857.",
        "Danisi F. Parkinson's disease. Therapeutic strategies to improve patient function and quality of life. Geriatrics 2002; 57(3): 46-50; quiz 52. Review. PubMed PMID: 11899548.",
      ]
    }, {
      "id": "C2",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["Non-TCA antidepressant", "persistent major depressive symptoms", "depression"],
      "reasone": null,
      "text": "Non-TCA antidepressant drug in the presence of persistent major depressive symptoms (depression).",
      "references": ["Lebowitz BD, Pearson JL, Schneider LS, Reynolds CF 3rd, Alexopoulos GS, Bruce ML, Conwell Y, Katz IR, Meyers BS, Morrison MF, Mossey J, Niederehe G, ParmeleeP. Diagnosis and treatment of depression in late life. Consensus statementupdate. JAMA 1997; 278(14): 1186-90. Review. PubMed PMID: 9326481.",
        "Mottram P, Wilson K, Strobl J. Antidepressants for depressed elderly. Cochrane Database Syst Rev. 2006 Jan 25;(1):CD003491. Review. PubMed PMID: 16437456.",
      ]
    }, {
      "id": "C3",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["rivastigmine", "donepezil", "galantamine", "Lewy Body dementia", "mild or moderate Alzheimer’s dementia", "Acetylcholinesterase inhibitor"],
      "reasone": null,
      "text": "Acetylcholinesterase inhibitor (e.g. donepezil, rivastigmine, galantamine) for mild or moderate Alzheimer’s dementia or Lewy Body dementia (rivastigmine).",
      "references": ["Raina P, Santaguida P, Ismaila A, Patterson C, Cowan D, Levine M, Booker L, Oremus M. Effectiveness of cholinesterase inhibitors and memantine for treating dementia: evidence review for a clinical practice guideline. Ann Intern Med 2008; 148(5): 379-97. Review. PubMed PMID: 18316756.",
        "Birks J. Cholinesterase inhibitors for Alzheimer's disease. Cochrane Database Syst Rev 2006 Jan 25;(1):CD005593. Review. PubMed PMID: 16437532.",
        "Rolinski M, Fox C, Maidment I, McShane R. Cholinesterase inhibitors for dementia with Lewy bodies, Parkinson's disease dementia and cognitive impairment  in Parkinson's disease. Cochrane Database Syst Rev 2012 Mar 14;3:CD006504. doi: 10.1002/14651858.CD006504.pub2. Review. PubMed PMID: 22419314."
      ]
    }, {
      "id": "C4",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["Topical prostaglandin", "prostamide", "beta-blocker", "open-angle glaucoma"],
      "reasone": null,
      "text": "Topical prostaglandin, prostamide or beta-blocker for primary open-angle glaucoma.",
      "references": ["Cheng JW, Li Y, Wei RL. Systematic review of intraocular pressure-loweringeffects of adjunctive medications added to latanoprost. Ophthalmic Res 2009; 42(2): 99-105. Review. PubMed PMID:19546601.",
        "Aptel F, Cucherat M, Denis P. Efficacy and tolerability of prostaglandin analogs: a meta-analysis of randomized controlled clinical trials. J Glaucom 2008; 17(8): 667-73. PubMed PMID: 19092464.",
        "Cheng JW, Cheng SW, Gao LD, Lu GC, Wei RL. Intraocular pressure-lowering effects of commonly used fixed-combination drugs with timolol: a systematic review and meta-analysis. PLoS One 2012; 7(9): e45079. Review. PubMed PMID: 23028770."
      ]
    }, {
      "id": "C5",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["Selective serotonin reuptake inhibitor", "severe anxiety"],
      "reasone": null,
      "text": "Selective serotonin reuptake inhibitor (or SNRI or pregabalin if SSRI contraindicated) for persistent severe anxiety that interferes with independent functioning.",
      "references": ["Ballenger JC. Remission rates in patients with anxiety disorders treated with paroxetine. J Clin Psychiatry 2004; 65(12):1696-707. PubMed PMID: 15641876.",
        "Allgulander C, Hartford J, Russell J, Ball S, Erickson J, Raskin J, Rynn M.Pharmacotherapy of generalized anxiety disorder: results of duloxetine treatment  from a pooled analysis of three clinical trials. Curr Med Res Opin 2007; 23(6): 1245-52. PubMed PMID: 17559726.",
        "Rickels K, Rynn M, Iyengar M, Duff D. Remission of generalized anxiety disorder: a review of the paroxetine clinical trials database. J Clin Psychiatry 2006; 67(1): 41-7. PubMed PMID: 16426087.",
        "National Institute for Health and Clinical Excellence. Generalized anxiety disorder and panic disorder (with or without agoraphobia) in adults. Clinical Guideline 113. 2011. http://guidance.nice.org.uk/CG113 (accessed 22 September, 2012)."
      ]
    }, {
      "id": "C6",
      "Section": "Section C: Central Nervous System & Ophthalmic Criteria",
      "terms": ["Dopamine agonist", "Restless Legs Syndrome"],
      "reasone": null,
      "text": "Dopamine agonist (ropinirole or pramipexole or rotigotine) for Restless Legs Syndrome, once iron deficiency and severe renal failure have been excluded.",
      "references": ["Zintzaras E, Kitsios GD, Papathanasiou AA, Konitsiotis S, Miligkos M, Rodopoulou P, Hadjigeorgiou GM. Randomized trials of dopamine agonists in restless legs syndrome: a systematic review, quality assessment, and meta-analysis. Clin Ther 2010; 32(2): 221-37. Review. PubMed PMID: 20206780.",
        "Hansen RA, Song L, Moore CG, Gilsenan AW, Kim MM, Calloway MO, Murray MD. Effect of ropinirole on sleep outcomes in patients with restless legs syndrome: meta-analysis of pooled individual patient data from randomized controlled trials. Pharmacotherapy 2009; 29(3): 255-62. PubMed PMID: 19249945.",
        "Scholz H, Trenkwalder C, Kohnen R, Riemann D, Kriston L, Hornyak M. Dopamine agonists for restless legs syndrome. Cochrane Database Syst Rev. 2011 Mar 16;(3):CD006009. doi: 10.1002/14651858.CD006009.pub2. Review. PubMed PMID: 21412893."
      ]
    },
    // Section D
    {
      "id": "D1",
      "Section": "Section D: Gastrointestinal System criteria",
      "terms": ["Proton Pump Inhibitor", "severe gastro-oesophageal reflux disease GERD", "GORD", "peptic stricture requiring dilatation."],
      "reasone": null,
      "text": "Proton Pump Inhibitor with severe gastro-oesophageal reflux disease (GERD, GORD) or peptic stricture requiring dilatation.",
      "references": ["Hungin AP, Raghunath A. Managing gastro-oesophageal reflux disease in the older patient. Digestion 2004; 69 Suppl 1: 17-24. Review. PubMed PMID: 15001831.",
        "Pilotto A, Franceschi M, Paris F. Recent advances in the treatment of GERD in the elderly: focus on proton pump inhibitors. Int J Clin Pract 2005; 59(10): 1204-9. Review. PubMed PMID: 16178989.",
        "Metz DC. Managing gastroesophageal reflux disease for the lifetime of the patient: evaluating the long-term options. Am J Med 2004; 117, Suppl 5A :49S-55S. PubMed PMID: 15478853."
      ]
    }, {
      "id": "D2",
      "Section": "Section D: Gastrointestinal System criteria",
      "terms": ["bran", "ispaghula", "methylcellulose", "sterculia", "diverticulosis ", " constipation", "Fibre supplement"],
      "reasone": null,
      "text": "Fibre supplement (e.g. bran, ispaghula, methylcellulose, sterculia) for diverticulosis with a history of constipation.",
      "references": ["Aldoori WH, Giovannucci EL, Rimm EB, Wing AL, Trichopoulos DV, Willett WC. A prospective study of diet and the risk of symptomatic diverticular disease in men. Am J Clin Nutr 1994; 60(5): 757-64. PubMed PMID: 7942584.",
        "Ünlü C, Daniels L, Vrouenraets BC, Boermeester MA. A systematic review of high-fibre dietary therapy in diverticular disease. Int J Colorectal Dis 2012; 27(4): 419-27. Review. PubMed PMID: 21922199.",
        "Rocco A, Compare D, Caruso F, Nardone G. Treatment options for uncomplicated diverticular disease of the colon. J Clin Gastroenterol 2009; 43(9): 803-8. Review. PubMed PMID: 19652620."
      ]
    },
    // Section E
    {
      "id": "E1",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["active", "disabling rheumatoid disease", "Disease-modifying anti-rheumatic drug", "DMARD"],
      "reasone": null,
      "text": "Disease-modifying anti-rheumatic drug (DMARD) with active, disabling rheumatoid disease",
      "references": ["Saag KG, Teng GG, Patkar NM, Anuntiyo J, Finney C, Curtis JR, Paulus HE,Mudano A, Pisu M, Elkins-Melton M, Outman R, Allison JJ, Suarez Almazor M,Bridges SL Jr, Chatham WW, Hochberg M, MacLean C, Mikuls T, Moreland LW, O'DellJ, Turkiewicz AM, Furst DE; American College of Rheumatology. American College of Rheumatology 2008 recommendations for the use of nonbiologic and biologic disease-modifying antirheumatic drugs in rheumatoid arthritis. Arthritis Rheum 2008; 59(6): 762-84. PubMed PMID: 18512708.",
        "Köller MD, Aletaha D, Funovits J, Pangan A, Baker D, Smolen JS. Response of elderly patients with rheumatoid arthritis to methotrexate or TNF inhibitors compared with younger patients. Rheumatology (Oxford) 2009; 48(12): 1575-80.PubMed PMID: 19812228.",
        "Fleischmann R, Baumgartner SW, Weisman MH, Liu T, White B, Peloso P. Long term safety of etanercept in elderly subjects with rheumatic diseases. Ann Rheum Dis 2006; 65(3): 379-84. PubMed PMID: 16150792."
      ]
    }, {
      "id": "E2",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["Bisphosphonates", "vitamin D", "vitamin D", "calcium", "patients taking long-term systemic corticosteroid therapy"],
      "reasone": null,
      "text": "Bisphosphonates and vitamin D and calcium in patients taking long-term systemic corticosteroid therapy.",
      "references": ["Homik J, Suarez-Almazor ME, Shea B, Cranney A, Wells G, Tugwell P. Calcium and vitamin D for corticosteroid-induced osteoporosis. Cochrane Database Syst Rev 2000; (2): CD000952. Review. PubMed PMID: 10796394.",
        "Homik J, Cranney A, Shea B, Tugwell P, Wells G, Adachi R, Suarez-Almazor M. Bisphosphonates for steroid induced osteoporosis. Cochrane Database Syst Rev 2000; (2):CD001347. Review. PubMed PMID: 10796432.",
        "Iwamoto J, Takeda T, Sato Y. Effects of antifracture drugs in postmenopausal, male and glucocorticoid-induced osteoporosis--usefulness of alendronate and risedronate. Expert Opin Pharmacother 2007; 8(16): 2743-56. Review. PubMedPMID: 17956196."
      ]
    }, {
      "id": "E3",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["Vitamin D supplement", "osteoporosis"],
      "reasone": null,
      "text": "Vitamin D supplement in patients with known osteoporosis and previous fragility fracture(s) and/or (Bone Mineral Density T-scores more than -2.5 in multiple sites).",
      "references": ["Avenell A, Gillespie WJ, Gillespie LD, O'Connell D. Vitamin D and vitamin D analogues for preventing fractures associated with involutional and post-menopausal osteoporosis. Cochrane Database Syst Rev 2009 Apr15; (2):CD000227. doi: 10.1002/14651858.CD000227.pub3. Review. PubMed PMID:19370554.",
        "Bischoff-Ferrari HA, Willett WC, Orav EJ, Lips P, Meunier PJ, Lyons RA,Flicker L, Wark J, Jackson RD, Cauley JA, Meyer HE, Pfeifer M, Sanders KM,Stähelin HB, Theiler R, Dawson-Hughes B. A pooled analysis of vitamin D dose requirements for fracture prevention. N Engl J Med 2012; 367(1):40-9. Erratum in: N Engl J Med. 2012 Aug 2;367(5):481. Oray, Endel J [corrected to Orav, Endel J]. PubMed PMID: 22762317.",
      ]
    }, {
      "id": "E4",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["bisphosphonate", "strontium ranelate", "teriparatide", "denosumab", "Bone anti-resorptive", "anabolic therapy", "osteoporosis"],
      "reasone": null,
      "text": "E4. Bone anti-resorptive or anabolic therapy (e.g. bisphosphonate, strontium ranelate, teriparatide, denosumab) in patients with documented osteoporosis, where no pharmacological or clinical status contraindication exists (Bone Mineral Density T-scores > -2.5 in multiple sites) and/or previous history of fragility fracture(s).",
      "references": ["Wells GA, Cranney A, Peterson J, Boucher M, Shea B, Robinson V, Coyle D,Tugwell P. Alendronate for the primary and secondary prevention of osteoporotic fractures in postmenopausal women. Cochrane Database Syst Rev 2008 Jan23; (1): CD001155. doi: 10.1002/14651858.CD001155.pub2. Review. PubMed PMID: 18253985.",
        "O'Donnell S, Cranney A, Wells GA, Adachi JD, Reginster JY. Strontium ranelate for preventing and treating postmenopausal osteoporosis. Cochrane Database Syst Rev 2006 Oct 18;(4):CD005326. Review. PubMed PMID: 17054253.",
        "Nakamura T, Tsujimoto M, Hamaya E, Sowa H, Chen P. Consistency of fracture risk reduction in Japanese and Caucasian osteoporosis patients treated with teriparatide: a meta-analysis. J Bone Miner Metab 2012; 30(3): 321-5. PubMed PMID: 21938382.",
        "von Keyserlingk C, Hopkins R, Anastasilakis A, Toulis K, Goeree R, Tarride JE,Xie F. Clinical efficacy and safety of denosumab in postmenopausal women with low bone mineral density and osteoporosis: a meta-analysis. Semin Arthritis Rheum 2011; 41(2):178-86. PubMed PMID: 21616520.",
      ]
    }, {
      "id": "E5",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["Vitamin D supplement", "housebound", "experiencing falls", "osteopenia"],
      "reasone": null,
      "text": "Vitamin D supplement in older people who are housebound or experiencing falls or with osteopenia (Bone Mineral Density T-score is > -1.0 but < -2.5 in multiple sites).",
      "references": ["Cameron ID, Gillespie LD, Robertson MC, Murray GR, Hill KD, Cumming RG, Kerse N.Interventions for preventing falls in older people in care facilities and hospitals.Cochrane Database Syst Rev 2012 Dec 12;12: CD005465.doi: 10.1002 / 14651858. CD005465.pub3.Review.PubMed PMID: 23235623. ",
        "Michael YL, Whitlock EP, Lin JS, Fu R, O'Connor EA, Gold R; US Preventive Services Task Force. Primary care-relevant interventions to prevent falling in older adults: a systematic evidence review for the U.S. Preventive Services Task Force. Ann Intern Med 2010; 153(12): 815-25. Review. PubMed PMID: 21173416.",
        "Kalyani RR, Stein B, Valiyil R, Manno R, Maynard JW, Crews DC. Vitamin D treatment for the prevention of falls in older adults: systematic review and meta-analysis. J Am Geriatr Soc 2010; 58(7): 1299-310. Review. PubMed PMID:20579169.",
      ]
    }, {
      "id": "E6",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["Xanthine-oxidase inhibitors", "recurrent episodes of gout", "allopurinol, febuxostat"],
      "reasone": null,
      "text": "Xanthine-oxidase inhibitors (e.g. allopurinol, febuxostat) with a history of recurrent episodes of gout",
      "references": ["Fravel MA, Ernst ME. Management of gout in the older adult. Am J Geriatr Pharmacother 2011; 9(5): 271-85. Review. PubMed PMID: 21849262.",
        "Zhang W, Doherty M, Bardin T, Pascual E, Barskova V, Conaghan P, Gerster J,Jacobs J, Leeb B, Lioté F, McCarthy G, Netter P, Nuki G, Perez-Ruiz F, Pignone A,Pimentão J, Punzi L, Roddy E, Uhlig T, Zimmermann-Gòrska I; EULAR Standing Committee for International Clinical Studies Including Therapeutics. EULAR evidence based recommendations for gout. Part II: Management. Report of a task force of the EULAR Standing Committee for International Clinical Studies Including Therapeutics (ESCISIT). Ann Rheum Dis. 2006; 65(10): 1312-24. Review. PubMed PMID: 16707532.",
        "Tayar JH, Lopez-Olivo MA, Suarez-Almazor ME. Febuxostat for treating chronic gout. Cochrane Database Syst Rev. 2012 Nov 14;11:CD008653. doi:10.1002/14651858.CD008653.pub2. Review. PubMed PMID: 23152264.",
      ]
    }, {
      "id": "E7",
      "Section": "Section E: Musculoskeletal System criteria",
      "terms": ["Folic acid", "patients taking methotexate"],
      "reasone": null,
      "text": "Folic acid supplement in patients taking methotexate.",
      "references": ["Visser K, Katchamart W, Loza E, Martinez-Lopez JA, Salliot C, Trudeau J,Bombardier C, Carmona L, van der Heijde D, Bijlsma JW, Boumpas DT, Canhao H,Edwards CJ, Hamuryudan V, Kvien TK, Leeb BF, Martín-Mola EM, Mielants H,Müller-Ladner U, Murphy G, Østergaard M, Pereira IA, Ramos-Remus C, Valentini G, Zochling J, Dougados M. Multinational evidence-based recommendations for the use of methotrexate in rheumatic disorders with a focus on rheumatoid arthritis: integrating systematic literature research and expert opinion of a broad international panel of rheumatologists in the 3E Initiative. Ann Rheum Dis 2009; 68(7): 1086-93. PubMed PMID: 19033291.",
        "Ortiz Z, Shea B, Suarez Almazor M, Moher D, Wells G, Tugwell P. Folic acid and folinic acid for reducing side effects in patients receiving methotrexate for rheumatoid arthritis. Cochrane Database Syst Rev 2000; (2):CD000951. Review. PubMed PMID: 10796393."
      ]
    },
    // Section F
    {
      "id": "F1",
      "Section": "Section F: Endocrine System criteria",
      "terms": ["Angiotensin Converting Enzyme (ACE) inhibitor", "Angiotensin Receptor Blocker", "diabetes with evidence of renal disease"],
      "reasone": null,
      "text": "Angiotensin Converting Enzyme (ACE) inhibitor or Angiotensin Receptor Blocker (if intolerant of ACE inhibitor) in diabetes with evidence of renal disease i.e. overt dipstick proteinuria or microalbuminuria (>30mg/24 hours) with or without serum biochemical renal impairment.",
      "references": ["Lv J, Perkovic V, Foote CV, Craig ME, Craig JC, Strippoli GF. Antihypertensive agents for preventing diabetic kidney disease. Cochrane Database Syst Rev 2012 Dec 12;12:CD004136. doi: 10.1002/14651858.CD004136.pub3. Review. PubMed PMID:23235603.",
        "Strippoli GF, Bonifati C, Craig M, Navaneethan SD, Craig JC. Angiotensin converting enzyme inhibitors and angiotensin II receptor antagonists for preventing the progression of diabetic kidney disease.Cochrane Database Syst Rev 2006 Oct 18;(4):CD006257. Review. PubMed PMID: 17054288.",
        "Blacklock CL, Hirst JA, Taylor KS, Stevens RJ, Roberts NW, Farmer AJ. Evidence for a dose effect of renin-angiotensin system inhibition on progression of microalbuminuria in Type 2 diabetes: a meta-analysis. Diabet Med 2011; 28(10): 1182-7. PubMed PMID: 21627686."
      ]
    },
    // Section G
    {
      "id": "G1",
      "Section": "Section G: Urogenital System criteria",
      "terms": ["Alpha-1 receptor blocker", "symptomatic prostatism", "benign prostatic hyperplasia"],
      "reasone": null,
      "text": "Alpha-1 receptor blocker with symptomatic prostatism, where prostatectomy is not considered necessary.",
      "references": ["Lowe FC. Role of the newer alpha, -adrenergic-receptor antagonists in the treatment of benign prostatic hyperplasia-related lower urinary tract symptoms. Clin Ther 2004; 26(11): 1701-13. Review. PubMed PMID: 15639685.",
        "Schwinn DA, Roehrborn CG. Alpha1-adrenoceptor subtypes and lower urinary tracsymptoms. Int J Urol 2008; 15(3):193-9. Review. PubMed PMID: 18304211",
        "Dunn CJ, Matheson A, Faulds DM. Tamsulosin: a review of its pharmacology and therapeutic efficacy in the management of lower urinary tract symptoms. Drugs Aging 2002; 19(2):135-61. Review. PubMed PMID: 11950378."
      ],
      "exp": {
        "prostatism": "benign prostatic hyperplasia"
      }
    }, {
      "id": "G2",
      "Section": "Section G: Urogenital System criteria",
      "terms": ["5-alpha reductase inhibitor", "symptomatic prostatism", "benign prostatic hyperplasia"],
      "reasone": null,
      "text": "5-alpha reductase inhibitor with symptomatic prostatism, where prostatectomy is not considered necessary.",
      "references": ["Tacklind J, Fink HA, Macdonald R, Rutks I, Wilt TJ. Finasteride for benign prostatic hyperplasia. Cochrane Database Syst Rev. 2010 Oct 6;(10): CD006015. doi: 10.1002/14651858.CD006015.pub3. Review. PubMed PMID: 20927745.",
        "O'Leary MP, Roehrborn CG, Black L. Dutasteride significantly improves quality  of life measures in patients with enlarged prostate. Prostate Cancer Prostatic Dis 2008; 11(2):129-33. PubMed PMID: 17592479.",
        "Roehrborn CG. BPH progression: concept and key learning from MTOPS, ALTESS, COMBAT, and ALF-ONE. BJU Int 2008; 101 Suppl 3: 17-21. Review. PubMed PMID: 18307681."
      ],
      "exp": {
        "prostatism": "benign prostatic hyperplasia"
      }
    }, {
      "id": "G3",
      "Section": "Section G: Urogenital System criteria",
      "terms": ["Topical vaginal oestrogen", "vaginal oestrogen pessary", "symptomatic atrophic vaginitis"],
      "reasone": null,
      "text": "Topical vaginal oestrogen or vaginal oestrogen pessary for symptomatic atrophic vaginitis.",
      "references": ["Lynch C. Vaginal estrogen therapy for the treatment of atrophic vaginitis. J Womens Health (Larchmt) 2009; 18(10): 1595-606. Review. PubMed PMID: 19788364.",
        "Bachmann G, Bouchard C, Hoppe D, Ranganath R, Altomare C, Vieweg A, Graepel J, Helzner E. Efficacy and safety of low-dose regimens of conjugated estrogens cream administered vaginally. Menopause 2009; 16(4): 719-27.PubMed PMID: 19436223.",
        "Mainini G, Scaffa C, Rotondi M, Messalli EM, Quirino L, Ragucci A. Local estrogen replacement therapy in postmenopausal atrophic vaginitis: efficacy and safety of low dose 17beta-estradiol vaginal tablets. Clin Exp Obstet Gynecol 2005; 32(2): 111-3. PubMed PMID: 16108394."
      ]
    },
    // Section H
    {
      "id": "H1",
      "Section": "Section H: Analgesics criteria",
      "terms": ["High-potency opioids", "moderate-severe pain"],
      "reasone": null,
      "text": "High-potency opioids in moderate-severe pain, where paracetamol, NSAIDs or low-potency opioids are not appropriate to the pain severity or have been ineffective.",
      "references": ["Papaleontiou M, Henderson CR Jr, Turner BJ, Moore AA, Olkhovskaya Y, Amanfo L,Reid MC. Outcomes associated with opioid use in the treatment of chronic non-cancer pain in older adults: a systematic review and meta-analysis. J Am Geriatr Soc 2010; 58(7): 1353-69. Review. PubMed PMID: 20533971.",
        "van Ojik AL, Jansen PA, Brouwers JR, van Roon EN. Treatment of chronic pain in older people: evidence-based choice of strong-acting opioids. Drugs Aging 2012; 29(8): 615-25. Review. PubMed PMID: 22765848.",
      ]
    }, {
      "id": "H2",
      "Section": "Section H: Analgesics criteria",
      "terms": ["Laxatives", "patients receiving opioids regularly."],
      "reasone": null,
      "text": "Laxatives in patients receiving opioids regularly.",
      "references": ["Cook SF, Lanza L, Zhou X, Sweeney CT, Goss D, Hollis K, Mangel AW, Fehnel SE. Gastrointestinal side effects in chronic opioid users: results from a population-based survey. Aliment Pharmacol Ther 2008; 27(12): 1224-32. PubMed PMID: 18363893.",
        "Chodosh J, Ferrell BA, Shekelle PG, Wenger NS. Quality indicators for pain management in vulnerable elders. Ann Intern Med 2001; 135(8 Pt 2): 731-5. PubMed PMID: 11601956.",
      ]
    },
    // Section I
    {
      "id": "I1",
      "Section": "Section I: Vaccines criteria",
      "terms": ["Seasonal trivalent influenza vaccine annually"],
      "reasone": null,
      "text": "Seasonal trivalent influenza vaccine annually",
      "references": ["Lam S, Jodlowski TZ. Vaccines for older adults. Consult Pharm 2009; 24(5): 380-91. Review. PubMed PMID: 19555147.",
        "Nichol KL, Nordin JD, Nelson DB, Mullooly JP, Hak E. Effectiveness of influenza vaccine in the community-dwelling elderly. N Engl J Med 2007; 357(14): 1373-81. PubMed PMID: 17914038.",
        "Michel JP, Chidiac C, Grubeck-Loebenstein B, Johnson RW, Lambert PH, Maggi S, Moulias R, Nicholson K, Werner H. Advocating vaccination of adults aged 60 years and older in Western Europe: statement by the Joint Vaccine Working Group of the European Union Geriatric Medicine Society and the International Association of Gerontology and Geriatrics-European Region. Rejuvenation Res 2009; 12(2): 127-35. PubMed PMID: 19415978.",
      ]
    }, {
      "id": "I2",
      "Section": "Section I: Vaccines criteria",
      "terms": ["Pneumococcal vaccine"],
      "reasone": null,
      "text": "Pneumococcal vaccine at least once after age 65, according to national guidelines.",
      "references": ["Fedson DS, Liss C. Precise answers to the wrong question: prospective clinical trials and the meta-analyses of pneumococcal vaccine in elderly and high-risk adults. Vaccine 2004; 22(8): 927-46. PubMed PMID: 15161070.",
        "Vila-Córcoles A, Ochoa-Gondar O, Hospital I, Ansa X, Vilanova A, Rodríguez T, Llor C; EVAN Study Group. Protective effects of the 23-valent pneumococcal polysaccharide vaccine in the elderly population: the EVAN-65 study. Clin Infect Dis 2006; 43(7): 860-8. PubMed PMID: 16941367.",
        "Vila-Corcoles A, Ochoa-Gondar O. Preventing pneumococcal disease in the elderly: recent advances in vaccines and implications for clinical practice. Drugs Aging 2013; 30(5): 263-76. Review. PubMed PMID: 23420119. ",
      ]
    },
  ]
});
