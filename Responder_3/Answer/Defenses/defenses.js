const defenses_mand = {

// Mandatory  //7
    "Subj Matter Jx" : "This Court lacks jurisdiction over the subject matter of this litigation.  OCGA 9-11-12(b)(1).",
    "Personal    Jx" : "This Court lacks jurisdiction over the Defendant. OCGA 9-11-12(b)(2).",
    "Improper Venue" : "Venue is improper as to this Defendant. OCGA 9-11-12(b)(3).",
    "Insuff Process" : "There has been insufficient process against this Defendant. OCGA 9-11-12(b)(4).",
    "Insuff Service" : "There has been an insufficiency of service of process on the Defendant. OCGA 9-11-12(b)(5).",
    "Fail/State Claim" : "Plaintiff’s Complaint fails to state a claim against the Defendant upon which relief can be granted. OCGA 9-11-12(b)(6).",
    "Fail/Join Party" : "The Plaintiff failed to join a party under OCGA § 9‑11‑19.  OCGA 9-11-12(b)(7).",
}

const defenses_cap = {
// Capacity  //2
    "Minor π" : "The Plaintiff(s) lack(s) the legal capacity to sue and no personal respresentative has been properly named to act legally on their behalf.",
    "Party in Intrest" : "The Plaintiff is not the real party in interest for purposes of this lawsuit, with the result that Plaintiff is not entitled to recover of this Defendant.",
}

const defenses_cont ={
// Contributory //4
    "π Negligent" : "The negligence of the Plaintiff, with respect to the occurrence at issue in this litigation, was equal to or exceeded that alleged against the Defendant, any negligence of Defendant being specifically denied.",
    "π Assm Risk" : "Plaintiff had full knowledge of the circumstances of which he/she complains and voluntarily and knowingly encountered the conditions of which he complains, thereby assuming the risk of the damages of which Plaintiff complains with the result that Plaintiff is not entitled to recover from the Defendant.",
    "π Ord. Care" : "The occurrence at issue in this litigation was the result of the Plaintiff’s failure to exercise ordinary care for his/her own safety.",
}

const defenses_3p = {
// 3rd Party //6
    "3P Prox Cause" : "The proximate cause of the occurrence at issue in this litigation was the act or omission of a party or parties other than this Defendant, unmixed with any negligence on the part of this Defendant, with the result that the Plaintiff is not entitled to recover from this Defendant.",
    "π's Driver PC" : "The Plaintiff's damages, if any, were proximately caused by the negligence of the operator of the vehicle in which Plaintiff was a passenger at the time of the occurrence at issue in this litigation, with the result that Plaint,iff is not entitled to recover against this Defendant.",
    "Sudden Emergency" : "The Defendant, when faced with a sudden emergency, exercised ordinary care under the circumstances.",
    "Act of God" : "The incident at issue in this litigation was the proximate result of an act of God.",
    "3P Apportionment" : "The Defendant gives notice that a non-party was wholly or partially at fault for the incident out of which this cause of action arises. OCGA § 51-12-33.",
    "3P Identity:" : "The responsible non-party’s name and last known address, or the best identification which is possible, is as follows: _____________________________ . The non-party so identified is believed to be at fault because ___________________ .",
}

const defenses_ele = {
// Elementary //4
    "Δ Owed No Duty" : "The Defendant owed no duty to the Plaintiff.",
    "Δ Not Breach" : "The Defendant has breached no duty owed to the Plaintiff.",
    "Δ Not Prox Cause" : "No act or omission of this Defendant proximately caused the occurrence at issue in this litigation or any damages alleged by the Plaintiff.",
    "π Not Damaged" : "Plaintiff has not incurred any damages as a result of any act or omission by the Defendant.",
}

const defenses_juri = {
// Jurisprudential //7
    "No Punitives" : "The Plaintiff is not entitled to recover punitive damages of this Defendant.",
    "Accord/Satisf" : "The claims set forth in Plaintiff's Complaint are barred by the doctrines of release and accord and satisfaction.",
    "Fail/Plead Dmgs" : "Plaintiff’s failure to specifically plead special damages in this action bars their recovery pursuant to OCGA §§ 9-11-9(g) and 51-12-2(b).",
    "No Attorney Fees" : "Plaintiff is not entitled to recover attorney’s fees and costs from Defendant under OCGA § 13-6-11.",
    "Prior Litigation" : "The claims set forth in Plaintiff's Complaint are the subject of a prior action, with the result that Plaintiff is not entitled to recover of this Defendant.",
    "WC Dbl-dip" : "Defendant shows the Plaintiff, is barred by operation of OCGA 33-7-11.1 from recovering certain special damages that were paid to Plaintiff or on Plaintiff’s behalf by a worker's compensation insurance carrier.",
    "SOL" : "The Plaintiff’s Complaint is barred by the applicable Statute of Limitations.",
}


var mand_keys = Object.keys(defenses_mand);
var mand_vals = Object.values(defenses_mand);

var cap_keys = Object.keys(defenses_cap);
var cap_vals = Object.values(defenses_cap);

var cont_keys = Object.keys(defenses_cont);
var cont_vals = Object.values(defenses_cont);

var p3_keys = Object.keys(defenses_3p);
var p3_vals = Object.values(defenses_3p);

var ele_keys = Object.keys(defenses_ele);
var ele_vals = Object.values(defenses_ele);

var juri_keys = Object.keys(defenses_juri);
var juri_vals = Object.values(defenses_juri);

// Create an ordered list (Array) for preservation on doc-load
let cats = [];
const defenses_all = cats.concat(defenses_mand,defenses_cap,defenses_cont,defenses_3p,defenses_ele,defenses_juri)
