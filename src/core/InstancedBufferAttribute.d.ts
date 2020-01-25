import { BufferGeometry } from './BufferGeometry';
import { BufferAttribute } from './BufferAttribute';

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
 */
export class InstancedBufferAttribute extends BufferAttribute {

	constructor(
		array: ArrayLike<number>,
		itemSize: number,
		normalized?: boolean,
		meshPerAttribute?: number
	);

	meshPerAttribute: number;

}
