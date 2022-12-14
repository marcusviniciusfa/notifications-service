/**
 * Value Object
 * * Testes unitários
 * * Validação
 */
export class Content {
  private readonly content: string;

  constructor(content: string) {
    // Validação antes de atribuir valores
    const isContentLengthValid = this.validateContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }

  // Valor de content
  public get value(): string {
    return this.content;
  }

  // Regra de negócio isolada
  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
