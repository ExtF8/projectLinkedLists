/**
 * Represents a linked list.
 */
export class LinkedLists {
    /**
     * Creates a new instance of LinkedLists.
     * @param {Node} head - The head node of the linked list.
     */
    constructor(head = null) {
        this.head = head;
    }

    // Adds a new node containing value to the end of the list
    append(value) {}

    // Adds a new node containing value to the start of the list
    prepend(value) {}

    // Returns the total number of nodes in the list
    size() {}

    // Returns the first node of the list
    head() {}

    // Returns the last node of the list
    tail() {}

    // Returns node at the given index
    at(index) {}

    // Removes the last element from the list
    pop() {}

    // Returns true if the passed value is in the list otherwise returns false
    contains(value) {}

    // Returns the index of the node containing value, or null if  ot found
    find(value) {}

    // Represents LinkedList objects as strings, to print them
    // The format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {}

    // Inserts a new node with provided value at the given index
    // Will need nextNode link update
    insertAt(value, index) {}

    // Removes the node at the given index
    // Will need nextNode link update
    removeAt(index) {}
}
