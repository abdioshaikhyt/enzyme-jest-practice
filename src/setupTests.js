global.TextDecoder = require('util').TextDecoder;
global.TextEncoder = require('util').TextEncoder;

const { ReadableStream, WritableStream, TransformStream } = require('stream/web');
global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.TransformStream = TransformStream;

const { MessageChannel, MessagePort } = require('worker_threads');
global.MessageChannel = MessageChannel;
global.MessagePort = MessagePort;

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });