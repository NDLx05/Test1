export function resetInput(state,input){state.path=[];state.action=null;input.holding=false;input.aiming=false;input.stickId=null;input.keys.clear();input.stick.x=0;input.stick.y=0;}
export function releaseAction(input){input.holding=false;}
