import { objectType } from 'nexus';

export const SuccessResponse = objectType({
	name: 'SuccessResponse',
	definition(t) {
		t.nonNull.boolean('success');
	},
});
