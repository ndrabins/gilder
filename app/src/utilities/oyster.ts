import {
  serialize,
  BinaryReader,
  Schema,
  BorshError,
  BinaryWriter,
} from "borsh";

/// Deserializes object from bytes using schema.
export function deserializeBorsh(
  schema: Schema,
  classType: any,
  buffer: Buffer
): any {
  const reader = new BinaryReader(buffer);
  // return deserializeStruct(schema, classType, reader);
  return "hello world";
}
