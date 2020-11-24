import Typography from '@material-ui/core/Typography';
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png';
import image4 from '../images/img4.png';
import image5 from '../images/img5.png';
import image6 from '../images/img6.png';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'fontsource-roboto';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },formControl2: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textfield:
    {
      width:'400px'
    },
    griditem:
    {
      marginTop: theme.spacing(3),
      width:'400px'
    }
}))
/**
 * 
 * dictionary={ prediction name, prediction description,parameter array= [ { parametername, changeto,dropdown}]} 
 *  
 */
const careplandict={'Respiratory therapy':'The broad spectrum of respiratory disease implies that the range of therapeutic options is similarly wide. Where appropriate, preventive measures should also be applied – smoking cessation, immunisation and improvements in air quality should be particularly encouraged.Some forms of treatment are common to several diseases; this applies to both pharmacological agents (antibiotics for various infections, bronchodilators for narrowed airways) and nonpharmacological treatments (oxygen, physiotherapy, mechanical ventilatory support).',
 'Wound care':'uccessful treatment of difficult wounds requires assessment of the entire patient and not just the wound. Systemic problems often impair wound healing; conversely, nonhealing wounds may herald systemic pathology  Your doctor might suggest this type of treatment if you’ve had an injury or illness that makes it hard to do daily tasks.',
  'Physical therapy procedure':'Physical therapy (PT) is care that aims to ease pain and help you function, move, and live better. You may need it to Relieve pain  Improve movement or ability  Prevent or recover from a sports injury   Prevent disability or surgery  Rehab after a stroke, accident, injury, or surgery  Work on balance to prevent a slip or fall  Manage a chronic illness like diabetes, heart disease, or arthritis  Recover after you give birth  Control your bowels or bladder  Adapt to an artificial limb  Learn to use assistive devices like a walker or cane  Get a splint or brace  People of all ages get physical therapy. It can treat a variety of health problems.',
'Urinary tract infection care':'Urinary tract infections typically occur when bacteria enter the urinary tract through the urethra and begin to multiply in the bladder. Although the urinary system is designed to keep out such microscopic invaders, these defenses sometimes fail. When that happens, bacteria may take hold and grow into a full-blown infection in the urinary tract.'
, 'Fracture care':'Fracture terms have changed over the years creating some confusion regarding what is appropriate terminology. Fracture and broken both have the same meaning but the preferred term among health care providers is fracture. Fractures can be further divided into types such as:– simple (single line fracture)– comminuted (multiple fragments)– closed (skin intact)– open (the bones displace enough to protrude through the skin)– non displaced (bones aligned)– displaced (bones not aligned) The goals of fracture treatment include restoring alignment, promoting bone healing, and return of function as soon as possible to prevent stiffness and wasting of muscles.',
'Routine antenatal care':'During your pregnancy, you’ll be offered a range of tests, including blood tests and ultrasound scans. These tests are designed to check for anything that may cause a problem during your pregnancy or after the birth.'
, 'Diabetes self management plan':'Diabetes Self-Management Education and Support (DSMES) services provide information and skills for people to manage their diabetes and related conditions. DSMES is tailored to your individual needs, goals, and life experiences and is guided by evidence-based standards. You’ll learn how to eat healthy, be physically active, monitor blood sugar levels, take medication, problem solve, reduce risk for other health conditions, cope with the emotional side of diabetes, and improve your health and quality of life. DSMES is led by a diabetes educator like a registered nurse, registered dietician, or pharmacist.',
'Lifestyle education regarding hypertension':'Based on the relationship between lifestyle and hypertension, it seems that implementing educational programs in the fields of nutrition, physical activity, and stress management is essential to improvement in disease knowledge and behavior modification among patients with hypertension',
'Musculoskeletal care':'Prevention of MSDs relies upon identification of risk factors, either by self-report, observation on the job, or measurement of posture which could lead to MSDs.[20] Once risk factors have been determined, there are several intervention methods which could be used to prevent the development of MSDs. The target of MSD prevention efforts is often the workplace in order to identify incidence rates of both disorders and exposure to unsafe conditions',
 'Asthma self management':'The evidence in favour of supported self-management for asthma is overwhelming. Self-management including provision of a written asthma action plan and supported by regular medical review, almost halves the risk of hospitalisation, significantly reduces emergency department attendances and unscheduled consultations, and improves markers of asthma control and quality of life. Demographic and cultural tailoring enables effective programmes to be implemented in deprived and/or ethnic communities or within schools.',
'Head injury rehabilitation':'Rehab may help:Improve your ability to function at home and in your community Help treat the mental and physical problems caused by TBI Provide social and emotional support Help you adapt to changes as they occur during your recovery Rehab can also help prevent complications of TBI such as: Blood clots Pain pressure ulcers, also called bedsores Breathing problems and pneumonia A drop in blood pressure when you move around Muscle weakness and muscle spasm Bowel and bladder problems',
'Hyperlipidemia clinical management plan':'Its purpose is to To enhance collaborative patient care by referral of patients with a diagnosis of dyslipidemia, coronary artery disease (CAD), diabetes (DM) or is at high risk for coronary heart disease to be comanaged by the clinical pharmacist, pharmacy resident or RN following this protocol. ', 
'Skin condition care':'Chronic skin conditions typically aren’t curable, but they can be managed using drugs and by paying close attention to your lifestyle. Learn more about symptoms, treatments, and ways to feel better.',
'Burn care':'Most minor burns can be treated at home. They usually heal within a couple of weeks.For serious burns, after appropriate first aid and wound assessment, your treatment may involve medications, wound dressings, therapy and surgery. The goals of treatment are to control pain, remove dead tissue, prevent infection, reduce scarring risk and regain function.People with severe burns may require treatment at specialized burn centers. They may need skin grafts to cover large wounds. And they may need emotional support and months of follow-up care, such as physical therapy.', 
'Care plan (record artifact)':'',
 'Cancer care plan':'Cancer treatment is the use of surgery, radiation, medications and other therapies to cure a cancer, shrink a cancer or stop the progression of a cancer. Many cancer treatments exist. Depending on your particular situation, you may receive one treatment or you may receive a combination of treatments.',
'Chronic obstructive pulmonary disease clinical management plan':'The goal of COPD management is to improve a patient’s functional status and quality of life by preserving optimal lung function, improving symptoms, and preventing the recurrence ofexacerbations. Currently, no treatments aside from lung transplantation have been shown to significantly improve lung function or decrease mortality; however, oxygen therapy (when appropriate) and smoking cessation may reduce mortality. Once the diagnosis of COPD is established, it is important to educate the patient about the disease and to encourage his or her  participation in therapy.',
'Mental health care plan':'A mental health care plan is a plan your doctor writes with you about treating a mental health condition. It helps you to access eligible allied health professionals like psychologists, social workers or occupational therapists who can help you to get better and live well.A mental health care plan can be useful for people with minor mental health conditions or very serious conditions, short-term concerns or long-term illnesses. You don’t already have to be diagnosed with a mental health condition to talk to your doctor about making a mental health care plan',
'Overactivity/inattention behavior management':'While there is no cure for ADHD, currently available treatments can help reduce symptoms and improve functioning. Treatments include medication, psychotherapy, education or training,or a combination of treatments.',
'Demential management':'Drugs approved for the most common form of dementia, Alzheimer’s disease, are discussed below. These drugs are also used to treat people with some of the other forms of dementia.cholinesterase inhibitors (donepezil [Aricept®], rivastigmine [Exelon®], and galantamine [Razadyne®]) NMDA receptor antagonist memantine [Namenda®]These two classes of drugs affect different chemical processes in the brain. Both classes have been shown to provide some benefit in improving or stabilizing memory function in some patients. Although none of these drugs appear to stop the progression of the underlying disease, they may slow it down.', 
'Cancer care plan':'Cancer treatment is the use of surgery, radiation, medications and other therapies to cure a cancer, shrink a cancer or stop the progression of a cancer. Many cancer treatments exist. Depending on your particular situation, you may receive one treatment or you may receive a combination of treatments.',
'Major surgery care management':'Postoperative care is the care you receive after a surgical procedure. The type of postoperative care you need depends on the type of surgery you have, as well as your health history. It often includes pain management and wound care.',
 'Terminal care':'Terminal care refers to the treatment provided to a critically ill person in a situation where curative treatment has been discontinued. Dying patients are not left to cope with their  condition even though the progress of their disease can no longer be influenced.',
'Heart failure self management plan':'Chronic heart failure (CHF) is a progressive and debilitating disease with a broad symptom profile, intermittently marked by periods of acute decompensation. CHF patients are encouraged to self-manage their illness, such as adhering to medical regimens and monitoring symptoms, to optimise health outcomes and quality of life. In so doing, patients are asked to collaborate with their health service providers with regard to their care. However, patients generally do not self-manage well, even with specialist support. Moreover, self-management interventions are yet to demonstrate morbidity or mortality benefits.',
'Spinal cord injury rehabilitation':'Spinal Cord Injury (SCI) treatment and rehabilitation focuses on intensively working with patients physically and psychologically, so that in a short period of time they can maximize their neurological recovery and general health. We educate SCI patients about all aspects of their injury and long term care. We want patients to return home as independent and productive as possible, prepared to resume their lives.',
 'Care Plan':'A nursing care plan (NCP) is a formal process that includes correctly identifying existing needs, as well as recognizing potential needs or risks. Care plans also provide a means of communication among nurses, their patients, and other healthcare providers to achieve health care outcomes. Without the nursing care planning process, quality and consistency in  patient care would be lost.',
'Psychiatry care plan':'A nursing care plan (NCP) is a formal process that includes correctly identifying existing needs, as well as recognizing potential needs or risks. Care plans also provide a means of communication among nurses, their patients, and other healthcare providers to achieve health care outcomes. Without the nursing care planning process, quality and consistency in patient care would be lost.',
'Major depressive disorder clinical management plan':'Depression is a common disorder, which often leads to poor quality of life and impaired role functioning. It is known to be a major contributor to the global burden of diseases and according to World Health Organization (WHO), depression is the fourth leading cause of disability worldwide and it is projected that by 2020, it will be the second most common leading cause of disability. Depression is also associated with high rates of suicidal behaviour and mortality. When depression occurs in the context of medical morbidity, it is associated withincreased health care cost, longer duration of hospitalization, poor cooperation in treatment, poor treatment compliance and high rates of morbidity. Depression is also known to be associated with difficulties in role transitions (e.g., low education, high teen child-bearing, marital disruption, unstable employment) and poor role functioning (e.g., low marital quality, low work performance, low earnings). It is also reported to be a risk factor for the onset and persistence of a wide range of secondary disorders. Available data also suggests that between one-third and one-half of patients also experience recurrence of depressive episodes.'
}
const code=[10509002, 284551006, 70704007, 38822007, 65966004, 72892002,
  15777000, 59621000, 301011002, 39848009, 44465007, 283371005,
  283385000, 239873007, 58150001, 233678006, 370247008, 62106007,
  55822004, 239872002, 24079001, 16114001, 403191005, 263102004,
  44054006, 33737001, 55680006, 201834006, 126906006, 284549007,
  307731004, 87433001, 36923009, 30832001, 62564004, 192127007,
  444448004, 40275004, 230265002, 363406005, 403190006, 424132000,
  88805009, 185086009, 239720000, 15724005, 449868002, 90560007,
  26929004, 110030002, 359817006, 47505003, 69896004, 109838007,
  370143000, 94260004, 262574004, 444470001, 45816000, 95417003,
  93761005, 67811000119102];
const desc=['Acute bronchitis (disorder)', 'Laceration of foot',
'Sprain of wrist', 'Cystitis', 'Fracture of forearm',
'Normal pregnancy', 'Prediabetes', 'Hypertension',
'Escherichia coli urinary tract infection',
'Whiplash injury to neck', 'Sprain of ankle',
'Laceration of forearm', 'Laceration of thigh',
'Osteoarthritis of knee', 'Fracture of clavicle',
'Childhood asthma', 'Facial laceration',
'Concussion with no loss of consciousness', 'Hyperlipidemia',
'Osteoarthritis of hip', 'Atopic dermatitis', 'Fracture of ankle',
'Second degree burn', 'Fracture subluxation of wrist', 'Diabetes',
'Fracture of rib', 'Drug overdose',
'Localized  primary osteoarthritis of the hand',
'Neoplasm of prostate', 'Laceration of hand',
'Injury of tendon of the rotator cuff of shoulder',
'Pulmonary emphysema (disorder)',
'Major depression  single episode', 'Rupture of patellar tendon',
'Concussion with loss of consciousness',
'Child attention deficit disorder',
'Injury of medial collateral ligament of knee',
'Contact dermatitis',
"Familial Alzheimer's disease of early onset (disorder)",
'Malignant tumor of colon', 'First degree burn',
'Non-small cell carcinoma of lung  TNM stage 1 (disorder)',
'Chronic congestive heart failure (disorder)',
'Chronic obstructive bronchitis (disorder)',
'Tear of meniscus of knee',
'Fracture of vertebral column without spinal cord injury',
'Smokes tobacco daily', 'Gout', "Alzheimer's disease (disorder)",
'Concussion injury of brain', 'Closed fracture of hip',
'Posttraumatic stress disorder', 'Rheumatoid arthritis',
'Overlapping malignant neoplasm of colon',
'Major depression disorder',
'Secondary malignant neoplasm of colon', 'Bullet wound',
'Injury of anterior cruciate ligament', 'Pyelonephritis',
'Primary fibromyalgia syndrome',
'Primary malignant neoplasm of colon',
'Primary small cell malignant neoplasm of lung  TNM stage 1 (disorder)'];

export default function FormCost(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [age, setage] = React.useState('');
    const [lat, setlat] = React.useState('');
    const [lon, setlon] = React.useState('');
    const [enthinicty, setenthinicty] = React.useState('');
    const [gender, setgender] = React.useState('');
    const [status, setstatus] = React.useState('');
    const [race, setrace] = React.useState('');
    const [reasoncode, setreasoncode] = React.useState('');

    const handleageChange = (event) => {
      setage(event.target.value);
    };
    const handlelatChange = (event) => {
      setlat(event.target.value);
    };
    
    const handlelonChange = (event) => {
      setlon(event.target.value);
    };
    const handleenthinictyChange = (event) => {
      setenthinicty(event.target.value);
    };
    const handlegenderChange = (event) => {
      setgender(event.target.value);
    };
    const handlestatusChange = (event) => {
      setstatus(event.target.value);
    };
    const handleraceChange = (event) => {
      setrace(event.target.value);
    };
    const handlereasoncodeChange = (event) => {
      
      console.log(event.target.value,'arnab')
      setreasoncode(event.target.value);
    };
    const ReturnReasonCode=()=>
    {
        var items=[]
        for(var i=0;i<code.length;i++)
        {
          var a=code[i],b=desc[i];
          items.push(<MenuItem value={a}>{b}</MenuItem>)
        }
        return items;
    }
    const handleClick=(event)=>{
      var cod=code[0];
      for(var i=0;i<code.length;i++)
      if(desc[i]==reasoncode)
      cod=code[i];
      cod=cod.toString()
      var data = JSON.stringify({"AGE":age,"LAT":lat,"LON":lon,"ethnicity":enthinicty,"gender":gender,"marital":status,"race":race,"reasoncode":cod});

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var v=this.responseText+": "+careplandict[this.responseText];
        props.changeres(v);
      }
      });

      xhr.open("POST", props.link+"?type=careplan");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {5} className={classes.paper}>
          <Grid container spacing= {1}  >
            <Grid item xs={12}>
              <Typography align="center" variant="h6">{props.name}</Typography>
            </Grid>
            <Grid item className={classes.griditem} xs={12}>
              <TextField className={classes.textfield} id="Name"  label="Name" />
            </Grid>
            <Grid item className={classes.griditem} xs={12}>
              <TextField id="Age"  className={classes.textfield} value={age} onChange={handleageChange} label="Age" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="Lat" value={lat} onChange={handlelatChange} label="Lattitude" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="Lon" value={lon} onChange={handlelonChange} label="Longitude" />
            </Grid>
            <Grid item className={classes.griditem} xs={6}>
              <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enthinicty}
                    onChange={handleenthinictyChange}
                  >
                    <MenuItem value={'hispanic'}>Hispanic</MenuItem>
                    <MenuItem value={'nonhispanic'}>non-Hispanic</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            
            <Grid item className={classes.griditem} xs={6}>
              <FormControl   className={classes.formControl}>
                <InputLabel id="demo-simple-select-label1">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label1"
                    id="demo-simple-select1"
                    value={gender}
                    onChange={handlegenderChange}
                  >
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label2">Marital Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select2"
                    value={status}
                    onChange={handlestatusChange}
                  >
                    <MenuItem value={'M'}>Married</MenuItem>
                    <MenuItem value={'S'}>Single</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label3">Race</InputLabel>
                  <Select
                    labelId="demo-simple-select-label3"
                    id="demo-simple-select3"
                    value={race}
                    onChange={handleraceChange}
                  >
                    <MenuItem value={'asian'}>Asian</MenuItem>
                    <MenuItem value={'black'}>Black</MenuItem>
                    <MenuItem value={'native'}>Native</MenuItem>
                    <MenuItem value={'white'}>White</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item  className={classes.griditem} xs={12}>
              <FormControl className={classes.formControl2}>
                <InputLabel id="demo-simple-select-label4">Diagnosis</InputLabel>
                  <Select
                    labelId="demo-simple-select-labe4l"
                    id="demo-simple-select4"
                    value={reasoncode}
                    onChange={handlereasoncodeChange}
                  >
                    {desc.map((name) => (
                    <MenuItem value={name}>{name}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>   
            <Paper />           
            </Grid>
            <Grid item xs={6}>   
            <Button variant="contained" color="primary"  onClick={handleClick}>
              Submit
            </Button>       
            </Grid>
          </Grid>
        </Paper>
    </div>
  )
}