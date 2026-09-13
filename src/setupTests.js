global.TextDecoder = require('util').TextDecoder;
global.TextEncoder = require('util').TextEncoder;

const { ReadableStream, WritableStream, TransformStream } = require('stream/web');

global.ReadableStream = ReadableStream;
global.WritableStream = WritableStream;
global.TransformStream = TransformStream;

const { MessageChannel, MessagePort } = require('worker_threads');
const { setImmediate } = require('timers');
global.MessageChannel = MessageChannel;
global.MessagePort = MessagePort;
global.setImmediate = setImmediate;

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

const enableHooks = require('jest-react-hooks-shallow').default;
enableHooks(jest);

