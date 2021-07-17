// Given a 2-D matrix representing an image, a location of a pixel in the
// screen and a color C, replace the color of the given pixel and all adjacent
// same colored pixels with C.

// For example, given the following matrix, and location pixel of (2, 2), and 'G' for green:

// B B W
// W W W
// W W W
// B B B
// Becomes

// B B G
// G G G
// G G G
// B B B

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

class Queue {
    constructor(head) {
        this.head = head;
        this.current = this.head;
        this.length = 1;
    }

    push(value) {
        if(this.head === null) {
            this.head = new Node(value);
            this.current = this.head;
        } else {
            this.current.next = new Node(value)
            this.current = this.current.next;
        }
        this.length += 1;
    }

    pop() {
        const top = this.head;
        this.head = this.head.next;
        this.length -= 1;
        top.next = null;
        return top;
    }
}

function TransformPixel(pixels, targetPixel, color) {

    const queue = new Queue(new Node(targetPixel));
    const targetString = pixels[targetPixel[0]][targetPixel[1]];

    while(queue.length > 0) {
        const pixel = queue.pop().value;
        pixels[pixel[0]][pixel[1]] = color;
        [1, -1].forEach(number => {
            if(pixels[pixel[0] + number] && pixels[pixel[0] + number][pixel[1]] === targetString) {
                queue.push([pixel[0] + number, pixel[1]]);
            }
            if (pixels[pixel[0]] && pixels[pixel[0]][pixel[1] + number] === targetString) {
                queue.push([pixel[0], pixel[1] + number]);
            }
        })
    }

    return pixels;

}

const input = [['b', 'b', 'w'], ['w','w','w'], ['w','w','w'], ['b','b','w']]

console.log(TransformPixel(input, [2,2], 'g'))