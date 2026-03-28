// Copied from https://github.com/jsaguet/auto-spies/tree/feat/vitest-auto-spies/packages/vitest-auto-spies/src
// SPDX-FileCopyrightText: 2026 Julien Saguet <julien.saguet@outlook.fr>
// SPDX-License-Identifier: MIT
import { AddSpyMethodsByReturnTypes } from '.';
import { CalledWithObject, createFunctionAutoSpy, Func } from '@hirez_io/auto-spies-core';
import { vi } from 'vitest';

type VitestCalledWithObject = { mockReturnValue: (...args: any[]) => void };

export function createFunctionSpy<FunctionType extends Func>(
  name: string
): AddSpyMethodsByReturnTypes<FunctionType> {
  return createFunctionAutoSpy(
    name,
    addVitestSyncMethodsToCalledWithObject,
    vitestFunctionSpyFactory
  );
}

function vitestFunctionSpyFactory(name: string, spyFunctionImpl: Func) {
  const functionSpy = vi.fn().mockName(name);
  functionSpy.mockImplementation(spyFunctionImpl);
  return {
    functionSpy,
    objectToAddSpyMethodsTo: functionSpy,
  };
}

function addVitestSyncMethodsToCalledWithObject(
  calledWithObject: any,
  calledWithArgs: any[]
): CalledWithObject & VitestCalledWithObject {
  calledWithObject.mockReturnValue = (value: any) => {
    calledWithObject.argsToValuesMap.set(calledWithArgs, { value });
  };
  return calledWithObject;
}
