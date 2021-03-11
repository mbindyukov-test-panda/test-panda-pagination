import fetch from 'node-fetch';

export const getSongs = (query) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&market=US&limit=50&offset=0`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer BQCig0OlLyjOhaPQkcFRFm0tGyouzMpx5-lcvyVbahd_6cs73WVYzB57Xc96wJq532A8LiI9EbCJhavKFFYrtbBWLhVrLXSweEUIrLznPi9rVvoH3msWlTHSKwiax6xbk9rFdPQiyLwp2ZX013wJfpk4Wk1_gqbf_6hfVE0Z7lUMgOLqAtMqopCeV0pKcUerubRzYiiTGGqJSVRXYKyHLZLzQluO_L2Z6q454Za7DmIBTSTh7Hqa7Uf5AorZZ3qCxhurXyUNw_aARUtL_a748z6GPY4-0Mb3DDFK-bJf',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// curl -X "GET" "https://api.spotify.com/v1/search?q=a&type=track&market=US&limit=50&offset=0" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAj1xz3jL35FCz64O3hkIwjPis5JYrdZG1QuyTBLf0HHNTI6HLPIBIeNr8xw0eGUQdiuWRcjRxl8Cn0GjhAqg3US8q5b6mjxxbUONovc4RQacHMuMd32t3368h7CxApk2QbRomBdr6SoGkCPdkkz288tym5maMa23UOcdiLTiLiuDotjtH25zfsyeweA0zq4b-Gwy1G__m8cXgenhKH79mErS1AQL9RvyRjaZovRsFTp8ObxLvlGDGmpXJkV7Umi0uBt56TpMGHeVQ_Ru5UY1y1dqlwMBu3BHCjsMEd"
