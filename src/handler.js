const { nanoid } = require('nanoid');
const { regis, materi } = require('./data-array');
const navMateri = require('./navigation');
const { bhsindo1bab1, bhsindo1bab2, bhsindo1bab3, bhsindo1bab4 } = require('./data-materi/bhsindo-kelas1');
const { bhsindo2bab1, bhsindo2bab2, bhsindo2bab3, bhsindo2bab4 } = require('./data-materi/bhsindo-kelas2');
const { bhsindo3bab1, bhsindo3bab2, bhsindo3bab3, bhsindo3bab4 } = require('./data-materi/bhsindo-kelas3');
const { ipa1bab1, ipa1bab2, ipa1bab3, ipa1bab4 } = require('./data-materi/ipa-kelas1');
const { ipa2bab1, ipa2bab2, ipa2bab3, ipa2bab4 } = require('./data-materi/ipa-kelas2');
const { ipa3bab1, ipa3bab2, ipa3bab3, ipa3bab4 } = require('./data-materi/ipa-kelas3');
const { ips1bab1, ips1bab2, ips1bab3, ips1bab4 } = require('./data-materi/ips-kelas1');
const { ips2bab1, ips2bab2, ips2bab3, ips2bab4 } = require('./data-materi/ips-kelas2');
const { pkn1bab1, pkn1bab2, pkn1bab3, pkn1bab4 } = require('./data-materi/pkn-kelas1');
const { pkn2bab1, pkn2bab2, pkn2bab3, pkn2bab4 } = require('./data-materi/pkn-kelas2');
const { pkn3bab1, pkn3bab2, pkn3bab3, pkn3bab4 } = require('./data-materi/pkn-kelas3');

const addDataRegisHandler = (request, h) => {
  const { userName, email, password } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();

  const newRegis = {
    userName, email, password, id, createdAt,
  }
  if(userName != "" && email !="" && password !=""){
    regis.push(newRegis);
  }
  
  const isSuccess = regis.filter((regis) => regis.id === id).length > 0;

  if(isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Data Registrasi Berhasil Ditambahkan',
      data: {
        regisId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Data Registrasi Gagal Ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllDataRegisHandler = () => ({
  status: 'success',
  data: {
    regis,
  },
});

const allDataMateri = (request, h) => {
  materi.push(navMateri);
  materi.push(bhsindo1bab1, bhsindo1bab2, bhsindo1bab3, bhsindo1bab4, bhsindo2bab1, bhsindo2bab2, bhsindo2bab3, bhsindo2bab4, bhsindo3bab1, bhsindo3bab2, bhsindo3bab3, bhsindo3bab4);
  materi.push(ipa1bab1, ipa1bab2, ipa1bab3, ipa1bab4, ipa2bab1, ipa2bab2, ipa2bab3, ipa2bab4, ipa3bab1, ipa3bab2, ipa3bab3, ipa3bab4);
  materi.push(ips1bab1, ips1bab2, ips1bab3, ips1bab4, ips2bab1, ips2bab2, ips2bab3, ips2bab4);
  materi.push(pkn1bab1, pkn1bab2, pkn1bab3, pkn1bab4, pkn2bab1, pkn2bab2, pkn2bab3, pkn2bab4, pkn3bab1, pkn3bab2, pkn3bab3, pkn3bab4);

  const isSuccess = materi.length > 0;

  if(isSuccess){
    const response = h.response({
      status: "success",
      message: "file html ada",
      data: {
        materi,
      }
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'data tidak ada',
  });
  response.code(500);
  return response;
};
const getDataMateri = () => ({
  status: 'success',
  materi,
});

module.exports = {
  addDataRegisHandler,
  getAllDataRegisHandler,
  allDataMateri,
  getDataMateri,
}