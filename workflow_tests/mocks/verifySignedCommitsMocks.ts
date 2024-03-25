/* eslint-disable @typescript-eslint/naming-convention */
import type {StepIdentifier} from '@kie/act-js/build/src/step-mocker/step-mocker.types';
import {createMockStep} from '../utils/utils';

// verifysignedcommits
const VERIFYSIGNEDCOMMITS__VERIFYSIGNEDCOMMITS__VERIFY_SIGNED_COMMITS__STEP_MOCK = createMockStep(
    'Verify signed commits',
    'Verify signed commits',
    'VERIFYSIGNEDCOMMITS',
    ['GITHUB_TOKEN'],
    [],
);
const VERIFYSIGNEDCOMMITS__VERIFYSIGNEDCOMMITS__STEP_MOCKS = [VERIFYSIGNEDCOMMITS__VERIFYSIGNEDCOMMITS__VERIFY_SIGNED_COMMITS__STEP_MOCK] as const satisfies StepIdentifier[];

export {
    // eslint-disable-next-line import/prefer-default-export
    VERIFYSIGNEDCOMMITS__VERIFYSIGNEDCOMMITS__STEP_MOCKS,
};
