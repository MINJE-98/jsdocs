/**
 * @constructor
 * @property {string} id - required
 * @property {string} content - required
 * @property {boolean} isComplete - required
 * @property {string} category - required
 * @property {Array} tags - optional
 */
class Todo {
  constructor(id, content, isComplete, category, tags) {
    this.id = id;
    this.content = content;
    this.isComplete = isComplete;
    this.category = category;
    this.tags = tags;
  }

  /**
   * @function
   * @name CreateTodo
   * @param {string} content - required
   * @param {string} category - optional
   * @param {Array} tags - optional
   * @return {Todo} - 생성된 Todo객체를 반환합니다.
   * @description 할 일을 추가할 수 있다. 내용없이 추가할 수 없다.
   */
  createTodo(content, category, tags) {}

  /**
   * @function
   * @name ReadAllTodo
   * @return {Todo[]} - TodoList를 배열로 반환합니다.
   * @description 전체 Todo를 List로 반환합니다.
   */
  readAllTodo(id) {}

  /**
   * @function
   * @name readTodo
   * @param {string} id - required
   * @return {Todo} - Todo를 반환합니다.
   * @description 특정 id의 Todo를 반환합니다.
   */
  readTodo(id) {}

  /**
   * @function
   * @name UpdateTodo
   * @param {string} id - required
   * @param {string} content - required
   * @param {string} category - optional
   * @param {Array} tags - optional
   * @return {boolean} - 완료 여부를 반환합니다.
   * @description 특정 Todo를 수정합니다.
   */
  updateTodo(id, content, category, tags) {}

  /**
   * @function
   * @name DeleteTodo
   * @param {string} id - required
   * @return {boolean} - 완료 여부를 반환합니다.
   * @description 특정 Todo를 삭제합니다.
   */
  deleteTodo(id) {}
  /**
   * @function
   * @name DeleteAllTodo
   * @return {boolean} - 완료 여부를 반환합니다.
   * @description  모든 Todo를 삭제합니다.
   */
  deleteAllTodo() {}

  /**
   * @function
   * @name DeleteTag
   * @param {string} id - required
   * @param {string} tag - required
   * @return {boolean} - 완료 여부를 반환합니다.
   * @description  특정 Todo의 테그를 삭제합니다.
   */
  deleteTag(id, tag) {}

  /**
   * @function
   * @name DeleteAllTags
   * @param {string} id - required
   * @return {boolean} - 완료 여부를 반환합니다.
   * @description 특정 Todo의 모든 테그를 삭제합니다.
   */
  deleteAllTags(id) {}
}
