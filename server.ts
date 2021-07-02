import express from 'express';
import cors from 'cors';
import { policyholder, policyholderModality, modality, subsidiary, generateQuote, insured } from './src/database/database';
import { InsuredModel, PolicyholderModel, SubsidiaryModel } from './src/models';

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello mock-server!');
})

app.get('/policyholder', (req, res) => {
  const { policyholderName } = req.query;
  let filteredList: PolicyholderModel[] = [];

  if(policyholderName) {
    filteredList = policyholder.filter(policyholder => {
      let searchName = policyholderName.toString().toLowerCase();
      let name = policyholder.name.toLowerCase();
      return name.includes(searchName) && policyholder;
    });
  }

  return res.json(filteredList);
});

app.get('/policyholderModality', (req, res) => {
  const { federalId } = req.query;
  const policyholderModalities = policyholderModality.filter(
    policyholderModality => policyholderModality.federalId === federalId
  )

  const modalitiesList = policyholderModalities.map(item => 
    modality[item.modalityId - 1]
  )

  return res.json(modalitiesList);
});

app.get('/subsidiary', (req, res) => {
  const { headquartersId } = req.query;
  let subsidiaries: SubsidiaryModel[] = [];

  if(headquartersId) {
    subsidiaries = subsidiary.filter(
      subsidiary => subsidiary.headquartersId === Number(headquartersId)
    )
  }
  

  return res.json(subsidiaries);
});

app.post('/generate-quote', (req, res) => {
  return res.json(generateQuote);
});

app.get('/insured', (req, res) => {
  const { insuredName } = req.query;
  let filteredList: InsuredModel[] = [];

  if(insuredName) {
    filteredList = insured.filter(insured => {
      let searchName = insuredName.toString().toLowerCase();
      let name = insured.name.toLowerCase();

      return name.includes(searchName) && insured;
    });
  }

  return res.json(filteredList);
});

app.listen(3333);