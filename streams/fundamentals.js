import { Readable, Transform, Writable, Duplex } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(`${String(i)}\n`);
        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

class InvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const inverted = Number(chunk.toString()) * -1;
    const buf = Buffer.from(`${String(inverted)}\n`);
    callback(null, buf);
  }
}

class LogAndRepeatStream extends Duplex {
  index = 1;

  _read() {
    const i = this.index++;
    if (i > 5) {
      this.push(null);
    } else {
      this.push(Buffer.from(`Read: ${i}\n`));
    }
  }

  _write(chunk, encoding, callback) {
    console.log(`Written: ${chunk.toString().trim()}`);
    callback();
  }
}

// Exemplo de uso da Duplex:
const duplex = new LogAndRepeatStream();

// Lendo da Duplex
duplex.pipe(process.stdout);

// Escrevendo na Duplex
duplex.write("Hello World");
duplex.end();

new OneToHundredStream()
  .pipe(new InvertNumberStream())
  .pipe(new MultiplyByTenStream());
