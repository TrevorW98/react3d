import dirtImg from './Images/dirt.jpg';
import grassImg from './Images/grass.jpg';
import glassImg from './Images/glass.png';
import logImg from './Images/log.jpg';
import woodImg from './Images/wood.png';
import { TextureLoader, NearestFilter, LinearMipMapLinearFilter } from 'three';

export const dirt = new TextureLoader().load(dirtImg);
export const grass = new TextureLoader().load(grassImg);
export const glass = new TextureLoader().load(glassImg);
export const wood = new TextureLoader().load(woodImg);
export const log = new TextureLoader().load(logImg);

dirt.magFilter = NearestFilter;
dirt.minFilter = LinearMipMapLinearFilter;
grass.magFilter = NearestFilter;
grass.minFilter = LinearMipMapLinearFilter;
glass.magFilter = NearestFilter;
glass.minFilter = LinearMipMapLinearFilter;
wood.magFilter = NearestFilter;
wood.minFilter = LinearMipMapLinearFilter;
log.magFilter = NearestFilter;
log.minFilter = LinearMipMapLinearFilter