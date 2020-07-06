
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const MODEL = [
  {title: 'Founder', name: 'Founder'},
  {title: 'CEO', name: 'CEO'},
  {title: 'Executive/Senior Level Officials and Managers', name: 'ESOfficialsManagers'},
  {title: 'First/Mid-Level Officials and Managers', name: 'FMOfficialsManagers'},
  {title: 'Professionals', name: 'Professionals'},
  {title: 'Technicians', name: 'Technicians'},
  {title: 'Sales Workers', name: 'SalesWorkers'},
  {title: 'Administrative Support workers', name: 'AdministrativeWorkers'},
  {title: 'Craft Workers', name: 'CraftWorkers'},
  {title: 'Operatives', name: 'Operatives'},
  {title: 'Laborers', name: 'Laborers'},
  {title: 'Services Workers', name: 'ServicesWorkers'},
  {title: 'Interns', name: 'Interns'}
];

export const initValues =()=> {
  const initItems = {};
  MODEL.forEach(({ name })=>{
    initItems[name] = [];
  });

  return {
    "Salary":initItems,
    "Employees":initItems,
    "Equity":initItems,
    "BoardMembers":[]
  }
};

export const salary_score=(values)=>{
  let women_score=0, race_score=0, persons_score=0, lgbtq_score=0;
  const model_length = MODEL.length;

  for(let i=0;i<model_length;i++)
  {
    const {name} = MODEL[i];
    const men = values[name][0] || 0;
    const women = values[name][1] || 0;
    const race = values[name][2] || 0;
    const person = values[name][3] || 0;
    const lgbtq = values[name][4] || 0;

    if(men === 0)  return [0,0,0,0];
    
    women_score += parseFloat(women/men);
    race_score += parseFloat(race/men);
    persons_score += parseFloat(person/men);
    lgbtq_score += parseFloat(lgbtq/men);
    
  }

  return [
      women_score*100/model_length,
      race_score*100/model_length,
      persons_score*100/model_length,
      lgbtq_score*100/model_length,
  ];
}

export const team_score=(values)=>{
  let women_score=0, race_score=0, persons_score=0, lgbtq_score=0;
  const model_length = MODEL.length;

  for(let i=0;i<model_length;i++)
  {
    const {name} = MODEL[i];
    if(name === 'ESOfficialsManagers') continue;

    let men = values[name][0] || 0;
    let women = values[name][1] || 0;
    let race = values[name][2] || 0;
    let person = values[name][3] || 0;
    let lgbtq = values[name][4] || 0;
    if(name === 'CEO'){
        men += (values['ESOfficialsManagers'][0] || 0);
        women += (values['ESOfficialsManagers'][1] || 0);
        race += (values['ESOfficialsManagers'][2] || 0);
        person += (values['ESOfficialsManagers'][3] || 0);
        lgbtq += (values['ESOfficialsManagers'][4] || 0);
    }

    if(men === 0)  return [0,0,0,0];
    
    women_score += parseFloat(women/men);
    race_score += parseFloat(race/men);
    persons_score += parseFloat(person/men);
    lgbtq_score += parseFloat(lgbtq/men);    
  }

  return [
    women_score*100/(model_length-1),
    race_score*100/(model_length-1),
    persons_score*100/(model_length-1),
    lgbtq_score*100/(model_length-1)
  ];
}

export const equity_score=(values)=>{
  let women_score=0, race_score=0, persons_score=0, lgbtq_score=0;
  const model_length = MODEL.length;

  for(let i=0;i<model_length;i++)
  {
    const {name} = MODEL[i];

    const team_men = values['Employees'][name][0] || 0;
    const equity_men = values['Equity'][name][0] || 0;

    const team_women = values['Employees'][name][1] || 0;
    const women = (team_men === 0 || team_women === 0 || equity_men === 0)
                  ? (name === "ESOfficialsManagers" || name === "FMOfficialsManagers" || name === "Professionals" || name === "Technicians") ? 1 :0 
                  : ((values['Equity'][name][1] || 0)/team_women)/(equity_men/team_men);
    
    const team_race = values['Employees'][name][2] || 0;
    const race = (team_men === 0 || team_race === 0 || equity_men === 0)
                ? (name === "ESOfficialsManagers" || name === "FMOfficialsManagers" || name === "Professionals" || name === "Technicians") ? 1 :0 
                : ((values['Equity'][name][2] || 0)/team_race)/(equity_men/team_men);
    
    const team_person = (values['Employees'][name][3] || 0);
    const person = (team_men === 0 || team_person === 0 || equity_men === 0)
                ? (name === "ESOfficialsManagers" || name === "FMOfficialsManagers" || name === "Professionals" || name === "Technicians") ? 1 :0 
                : ((values['Equity'][name][3] || 0)/team_person)/(equity_men/team_men);
    
    const team_lgbtq = (values['Employees'][name][4] || 0);
    const lgbtq = (team_men === 0 || team_lgbtq === 0 || equity_men === 0)
                ? (name === "ESOfficialsManagers" || name === "FMOfficialsManagers" || name === "Professionals" || name === "Technicians") ? 1 :0 
                : ((values['Equity'][name][4] || 0)/team_lgbtq)/(equity_men/team_men);

    women_score += women;    
    race_score += race;
    persons_score += person;
    lgbtq_score += lgbtq;    
  }

  return [
    women_score*100/model_length,
    race_score*100/model_length,
    persons_score*100/model_length,
    lgbtq_score*100/model_length,
  ];
}

export const board_score=(values)=>{
    const men = values[0] || 0;
    if(men === 0) return [0,0,0,0];

    const women = values[1] || 0;
    const race = values[2] || 0;
    const person = values[3] || 0;
    const lgbtq = values[4] || 0;

    return [
        women/men*100,
        race/men*100,
        person/men*100,
        lgbtq/men*100,
    ];
}

export const pdf_download=()=>{
  const input = document.getElementById("table_content");
  
  html2canvas(input)
  .then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();

    const imgProps= pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();    
    const pdfHeight = (imgProps.height/imgProps.width) * pdfWidth;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, 'alias');
    pdf.save("Summary.pdf");
  });
}