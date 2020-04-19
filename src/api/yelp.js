import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer QN16pcxnyWt2QVXLM9MKozX2dfhu1SaPlIBmPolHdJYt_vq1U-2qmdWQs_S0OjEaAkqh7H3O72MofkDB0eiGI-dh3eZmP90Vv-nzvm7gNk6L5-OCsgm-68PGDgKYXnYx',
  },
});
