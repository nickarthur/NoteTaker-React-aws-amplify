/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNanNote = `query GetNanNote($id: ID!) {
  getNanNote(id: $id) {
    id
    note
  }
}
`;
export const listNanNotes = `query ListNanNotes(
  $filter: ModelNanNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNanNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      note
    }
    nextToken
  }
}
`;
