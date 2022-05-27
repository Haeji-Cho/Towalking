const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // 환경변수
const config = require(__dirname + '/../config/config')[env];
const tw_Trail = require(__dirname + '/tw_Trail'); // 투월킹 산책로 모델 가져오기
const user_Trail = require(__dirname + '/user_Trail'); // 사용자 산책로 모델 가져오기
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config); // mysql 설정 세팅

db.sequelize = sequelize; // 인스턴스
db.Sequelize = Sequelize; // 라이브러리

db.tw_Trail = tw_Trail(sequelize, Sequelize); // 시퀄라이즈에 산책로 모델 등록
db.user_Trail = user_Trail(sequelize, Sequelize); // 시퀄라이즈에 산책로 모델 등록


module.exports = db;