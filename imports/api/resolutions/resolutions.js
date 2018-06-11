import { Mongo } from 'meteor/mongo';
// algo asi como un modelo
const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;
