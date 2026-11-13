import test from 'node:test';
import assert from 'node:assert/strict';
import {resetInput} from '../src/input.js';
test('modal reset discards planned movement, aim and held input',()=>{const state={path:[{x:1,y:2}],action:{kind:'mine'}},input={holding:true,aiming:true,stickId:1,stick:{x:1,y:0},keys:new Set(['e'])};resetInput(state,input);assert.deepEqual(state.path,[]);assert.equal(state.action,null);assert.equal(input.aiming,false);assert.equal(input.holding,false);assert.equal(input.keys.size,0);assert.equal(input.stick.x,0);});
