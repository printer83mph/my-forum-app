export interface Message {
  name: string,
  message: string,
}

export interface MessageWithId extends Message {
  id: string
}
