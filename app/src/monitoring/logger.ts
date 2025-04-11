import { createLogger, format, transports } from 'winston';

const customLevels = {
  levels:{
    critical:0,
    error:1,
    warning:2,
    info:3,
    debug:4
  },
  colors:{
    critical:"orange",
    error:"red",
    warning:"yellow",
    info:"blue",
    debug:"green"
  }
}

const logger = createLogger({
  levels:customLevels.levels,
  format:format.combine(
    format.colorize(),
    format.timestamp({
      format:new Date().toLocaleString()
    }),
    format.printf(({timestamp,level,message})=>{
      return `${timestamp}, ${level}, ${message}`
    })),
    transports:[new transports.Console()]
});

export default logger;