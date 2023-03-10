import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;
  pickImage(): Promise<void>;
  someDummyMethod(): Promise<void>;
  addTwo(a: number, b: number): Promise<number>;
}

export default TurboModuleRegistry.get<Spec>('RTNCalculator') as Spec | null;
