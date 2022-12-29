import { error } from '@sveltejs/kit';
import { data } from '../../../stores/data';
import type { TData } from 'src/types/Data.types';

export const ssr = false;

export function load({ params }: { params: any }) {
	let $data: TData | undefined;

	data.subscribe((value) => {
		$data = value;
	});

	const boardData = $data && Object.values($data.boards).find((board) => board.slug == params.slug);

	if (boardData) return { ...boardData };

	throw error(404, 'Not Found');
}
