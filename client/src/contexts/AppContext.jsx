import { ContextProvider1 } from '.../Context1';
import { ContextProvider2 } from '.../Context2';
import { ContextProvider3 } from '.../Context3';
import { ContextProvider4 } from '.../Context4';
import { combineProviders } from '../utils/combine';

const providers = [
  ContextProvider1,
  ContextProvider2,
  ContextProvider3,
  ContextProvider4,
];

export default function AppContext() {
  combineProviders(providers);
}
