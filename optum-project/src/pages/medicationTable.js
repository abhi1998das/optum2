import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import {  TextField, Toolbar, AppBar, Grid } from '@material-ui/core';
const data={"Description":{"0":"Acetaminophen 325 MG Oral Tablet","1":"Acetaminophen 21.7 MG\/ML \/ Dextromethorphan Hydrobromide 1 MG\/ML \/ doxylamine succinate 0.417 MG\/ML Oral Solution","2":"Methylphenidate Hydrochloride 20 MG Oral Tablet","3":"atomoxetine 100 MG Oral Capsule","4":"Galantamine 4 MG Oral Tablet","5":"24 HR Donepezil hydrochloride 10 MG \/ Memantine hydrochloride 28 MG Extended Release Oral Capsule","6":"120 ACTUAT Fluticasone propionate 0.044 MG\/ACTUAT Metered Dose Inhaler","7":"NDA020503 200 ACTUAT Albuterol 0.09 MG\/ACTUAT Metered Dose Inhaler","8":"Naproxen sodium 220 MG Oral Tablet","9":"cycloSPORINE modified 100 MG Oral Capsule","10":"Hydrocortisone 10 MG\/ML Topical Cream","11":"ribociclib 200 MG Oral Tablet","12":"5 ML fulvestrant 50 MG\/ML Prefilled Syringe","13":"100 ML zoledronic acid 0.04 MG\/ML Injection","14":"5 ML hyaluronidase-oysk 2000 UNT\/ML \/ trastuzumab 120 MG\/ML Injection","15":"10 ML Doxorubicin Hydrochloride 2 MG\/ML Injection","16":"Tamoxifen 10 MG Oral Tablet","17":"exemestane 25 MG Oral Tablet","18":"100 ML Epirubicin Hydrochloride 2 MG\/ML Injection","19":"Cyclophosphamide 1000 MG Injection","20":"palbociclib 100 MG Oral Capsule","21":"neratinib 40 MG Oral Tablet","22":"Paclitaxel 100 MG Injection","23":"Donepezil hydrochloride 23 MG Oral Tablet","24":"Donepezil hydrochloride 10 MG Oral Tablet","25":"Tacrine 10 MG Oral Capsule","26":"Memantine hydrochloride 2 MG\/ML Oral Solution","27":"1 ML Epoetin Alfa 4000 UNT\/ML Injection [Epogen]","28":"Leucovorin 100 MG Injection","29":"10 ML oxaliplatin 5 MG\/ML Injection","30":"FLUoxetine 20 MG Oral Capsule","31":"NITROFURANTOIN MACROCRYSTALS 50 MG Oral Capsule","32":"Phenazopyridine hydrochloride 100 MG Oral Tablet","33":"Nitrofurantoin 5 MG\/ML Oral Suspension","34":"Cisplatin 50 MG Injection","35":"Penicillin V Potassium 250 MG Oral Tablet","36":"Penicillin V Potassium 500 MG Oral Tablet","37":"insulin human isophane 70 UNT\/ML \/ Regular Insulin Human 30 UNT\/ML Injectable Suspension [Humulin]","38":"24 HR Metformin hydrochloride 500 MG Extended Release Oral Tablet","39":"Insulin Lispro 100 UNT\/ML Injectable Solution [Humalog]","40":"Amoxicillin 250 MG \/ Clavulanate 125 MG Oral Tablet","41":"Sertraline 100 MG Oral Tablet","42":"Acetaminophen\/Hydrocodone","43":"Simvastatin 10 MG Oral Tablet","44":"Hydrochlorothiazide 12.5 MG","45":"amLODIPine 5 MG \/ Hydrochlorothiazide 12.5 MG \/ Olmesartan medoxomil 20 MG Oral Tablet","46":"Atenolol 50 MG \/ Chlorthalidone 25 MG Oral Tablet","47":"Hydrochlorothiazide 25 MG Oral Tablet","48":"Etoposide 100 MG Injection","49":"Methotrexate 2.5 MG Oral Tablet","50":"60 ACTUAT Fluticasone propionate 0.25 MG\/ACTUAT \/ salmeterol 0.05 MG\/ACTUAT Dry Powder Inhaler","51":"24 HR metoprolol succinate 100 MG Extended Release Oral Tablet [Toprol]","52":"Furosemide 40 MG Oral Tablet","53":"10 ML Furosemide 10 MG\/ML Injection","54":"Naproxen 500 MG Oral Tablet","55":"Allopurinol 100 MG Oral Tablet","56":"Colchicine 0.6 MG Oral Tablet","57":"pregabalin 100 MG Oral Capsule"},"MinBase":{"0":4.25,"1":4.75,"2":41.8,"3":349.81,"4":47.56,"5":460.65,"6":6.87,"7":3.18,"8":3.88,"9":220.28,"10":4.49,"11":263.49,"12":263.49,"13":263.49,"14":263.49,"15":263.49,"16":263.49,"17":263.49,"18":263.49,"19":263.49,"20":263.49,"21":263.49,"22":6212.7,"23":179.45,"24":75.13,"25":1347.47,"26":212.97,"27":263.49,"28":8.39,"29":2147.93,"30":263.49,"31":25.27,"32":11.37,"33":354.42,"34":417.28,"35":1.24,"36":2.96,"37":35.1,"38":1.37,"39":99.31,"40":4.91,"41":263.49,"42":263.49,"43":263.49,"44":263.49,"45":263.49,"46":263.49,"47":263.49,"48":176.08,"49":146.06,"50":7.68,"51":263.49,"52":263.49,"53":263.49,"54":8.14,"55":31.11,"56":263.44,"57":374.84},"MaxBase":{"0":10.0,"1":12.28,"2":217.38,"3":548.42,"4":315.25,"5":573.46,"6":61.44,"7":1200.9,"8":29.95,"9":220.28,"10":11.71,"11":263.49,"12":263.49,"13":263.49,"14":263.49,"15":263.49,"16":263.49,"17":263.49,"18":263.49,"19":263.49,"20":263.49,"21":263.49,"22":7015.8,"23":850.87,"24":560.94,"25":1411.85,"26":704.68,"27":263.49,"28":84.57,"29":3052.01,"30":263.49,"31":136.13,"32":61.7,"33":3693.18,"34":512.64,"35":41.58,"36":42.6,"37":1020.31,"38":615.0,"39":1804.04,"40":147.73,"41":263.49,"42":263.49,"43":263.49,"44":263.49,"45":263.49,"46":263.49,"47":263.49,"48":253.75,"49":227.48,"50":60.35,"51":263.49,"52":263.49,"53":263.49,"54":20.65,"55":31.11,"56":263.44,"57":374.84},"minTotalCost":{"0":4.25,"1":4.75,"2":961.4,"3":1269.27,"4":130.96,"5":2293.84,"6":9.58,"7":10.95,"8":9.03,"9":220.28,"10":6.21,"11":263.49,"12":263.49,"13":263.49,"14":263.49,"15":263.49,"16":263.49,"17":263.49,"18":263.49,"19":263.49,"20":263.49,"21":263.49,"22":6212.7,"23":9510.85,"24":826.43,"25":13715.6,"26":11945.9,"27":263.49,"28":23.78,"29":2147.93,"30":263.49,"31":25.27,"32":11.37,"33":354.42,"34":417.28,"35":1.24,"36":2.96,"37":35.1,"38":1.37,"39":114.59,"40":4.91,"41":108821.0,"42":142548.0,"43":263.49,"44":263.49,"45":263.49,"46":263.49,"47":263.49,"48":176.08,"49":7595.12,"50":10.04,"51":1053.96,"52":1053.96,"53":263.49,"54":20.65,"55":31.11,"56":263.44,"57":374.84},"maxTotalCost":{"0":10.0,"1":12.28,"2":16736.7,"3":59777.8,"4":31836.8,"5":21189.9,"6":731.52,"7":14410.8,"8":11521.6,"9":220.28,"10":6967.45,"11":263.49,"12":263.49,"13":263.49,"14":263.49,"15":263.49,"16":263.49,"17":263.49,"18":263.49,"19":263.49,"20":263.49,"21":263.49,"22":7015.8,"23":52753.9,"24":6170.34,"25":381334.0,"26":50638.7,"27":263.49,"28":9066.26,"29":648090.0,"30":208684.0,"31":136.13,"32":61.7,"33":3693.18,"34":512.64,"35":41.58,"36":42.6,"37":11093.6,"38":7309.56,"39":12852.7,"40":496.9,"41":211582.0,"42":210002.0,"43":211582.0,"44":3161.88,"45":3161.88,"46":3161.88,"47":3161.88,"48":253.75,"49":12283.9,"50":703.32,"51":18971.3,"52":18971.3,"53":17390.3,"54":598.86,"55":31.11,"56":263.44,"57":374.84},"ReasonCode":{"0":10509002,"1":10509002,"2":192127007,"3":192127007,"4":230265002,"5":230265002,"6":233678006,"7":233678006,"8":239872002,"9":24079001,"10":24079001,"11":254837009,"12":254837009,"13":254837009,"14":254837009,"15":254837009,"16":254837009,"17":254837009,"18":254837009,"19":254837009,"20":254837009,"21":254837009,"22":254837009,"23":26929004,"24":26929004,"25":26929004,"26":26929004,"27":271737000,"28":363406005,"29":363406005,"30":36923009,"31":38822007,"32":38822007,"33":38822007,"34":424132000,"35":43878008,"36":43878008,"37":44054006,"38":44054006,"39":44054006,"40":444814009,"41":47505003,"42":47505003,"43":55822004,"44":59621000,"45":59621000,"46":59621000,"47":59621000,"48":67811000119102,"49":69896004,"50":87433001,"51":88805009,"52":88805009,"53":88805009,"54":90560007,"55":90560007,"56":90560007,"57":95417003},"ReasonDescription":{"0":"Acute bronchitis (disorder)","1":"Acute bronchitis (disorder)","2":"Child attention deficit disorder","3":"Child attention deficit disorder","4":"Familial Alzheimer's disease of early onset (disorder)","5":"Familial Alzheimer's disease of early onset (disorder)","6":"Childhood asthma","7":"Childhood asthma","8":"Osteoarthritis of hip","9":"Atopic dermatitis","10":"Atopic dermatitis","11":"Malignant neoplasm of breast (disorder)","12":"Malignant neoplasm of breast (disorder)","13":"Malignant neoplasm of breast (disorder)","14":"Malignant neoplasm of breast (disorder)","15":"Malignant neoplasm of breast (disorder)","16":"Malignant neoplasm of breast (disorder)","17":"Malignant neoplasm of breast (disorder)","18":"Malignant neoplasm of breast (disorder)","19":"Malignant neoplasm of breast (disorder)","20":"Malignant neoplasm of breast (disorder)","21":"Malignant neoplasm of breast (disorder)","22":"Malignant neoplasm of breast (disorder)","23":"Alzheimer's disease (disorder)","24":"Alzheimer's disease (disorder)","25":"Alzheimer's disease (disorder)","26":"Alzheimer's disease (disorder)","27":"Anemia (disorder)","28":"Malignant tumor of colon","29":"Malignant tumor of colon","30":"Major depression single episode","31":"Cystitis","32":"Cystitis","33":"Cystitis","34":"Non-small cell carcinoma of lung TNM stage 1 (disorder)","35":"Streptococcal sore throat (disorder)","36":"Streptococcal sore throat (disorder)","37":"Diabetes","38":"Diabetes","39":"Diabetes","40":"Viral sinusitis (disorder)","41":"Posttraumatic stress disorder","42":"Posttraumatic stress disorder","43":"Hyperlipidemia","44":"Hypertension","45":"Hypertension","46":"Hypertension","47":"Hypertension","48":"Primary small cell malignant neoplasm of lung TNM stage 1 (disorder)","49":"Rheumatoid arthritis","50":"Pulmonary emphysema (disorder)","51":"Chronic congestive heart failure (disorder)","52":"Chronic congestive heart failure (disorder)","53":"Chronic congestive heart failure (disorder)","54":"Gout","55":"Gout","56":"Gout","57":"Primary fibromyalgia syndrome"}}
var columns ;

 var rows ;
const changeData=(text)=>
{
  var row=[],col=[],keys=''
  for(var key in data)
  {
    keys=key
    col.push({ id: key, label: key, minWidth: 170 })
  }
  for(var key in data[keys])
  {
    var v={},fl=0
    if(text=='')fl=1
    for(var k in data)
    {
      v[k]=data[k][key]
      if(v[k].toString().indexOf(text)!=-1)
      fl=1;
    }
    if(fl==1)
    row.push(v)
  }
  columns=col;
  rows=row;
}
changeData('')

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

var fl=0;
export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [text, settext] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handletext = (event) => {
    settext(event.target.value);
    changeData(text)
  };
  return (
    <Paper className={classes.root}>
      <AppBar  position="static" color="default" elevation={0} style={{padding:10}}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>               
                            <Typography variant="h6" gutterBottom>
                                Medications
                            </Typography>
                            
                            <Typography variant="subtitle1" gutterBottom>
                                Medication Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="standard-basic" label="Search text" value={text} onChange={handletext}/>
                        </Grid>
                    </Grid>  
                </Toolbar>
            </AppBar>
            {columns!=undefined&&<div style={{ height: 600, width: '100%' }}>
        <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </div>}
    </Paper>
  );
}
