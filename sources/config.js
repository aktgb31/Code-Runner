const compiler = "g++";
const infile = process.argv[2];
const outfile = infile.split(".")[0];
const flags = ["-std=c++17", "-O2", infile, "-o", outfile];
const timeout = 1000;

const errorMap = { 3221225620: "Runtime Error", 1: "Time Limit Exceeded" };
exports.timeout = timeout;
exports.outfile = outfile;
exports.compiler = compiler;
exports.flags = flags;
