/**
 * Represents a Holberton course with a name, length, and list of students.
 */
export default class HolbertonCourse {
  /**
     * Creates an instance of HolbertonCourse.
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course in weeks.
     * @param {string[]} students - The list of students in the course.
     */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }

    /**
       * The name of the course.
       * @type {string}
       */
    this._name = name;

    /**
       * The length of the course in weeks.
       * @type {number}
       */
    this._length = length;

    /**
       * The list of students in the course.
       * @type {string[]}
       */
    this._students = students;
  }

  /**
     * Gets the name of the course.
     * @returns {string} The name of the course.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the name of the course.
     * @param {string} val - The new name for the course.
     */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = val;
  }

  /**
     * Gets the length of the course in weeks.
     * @returns {number} The length of the course in weeks.
     */
  get length() {
    return this._length;
  }

  /**
     * Sets the length of the course in weeks.
     * @param {number} val - The new length of the course in weeks.
     */
  set length(val) {
    if (!Number.isInteger(val)) {
      throw new TypeError('length must be a number');
    }
    this._length = val;
  }

  /**
     * Gets the list of students in the course.
     * @returns {string[]} The list of students in the course.
     */
  get students() {
    return this._students;
  }

  /**
     * Sets the list of students in the course.
     * @param {string[]} val - The new list of students in the course.
     */
  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('students must be an array');
    }
    this._students = val;
  }
}
