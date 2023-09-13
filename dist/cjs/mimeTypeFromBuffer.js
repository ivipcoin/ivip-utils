"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mimeTypeFromBuffer = void 0;
const mimeTypes = {
    "ffd8ffe000104a464946": "image/jpeg",
    "89504e470d0a1a0a0000": "image/png",
    "47494638396126026f01": "image/gif",
    "52494646574f455053": "image/webp",
    "464c4946": "image/flif",
    "424d": "image/bmp",
    "49492a00": "image/tiff",
    "4d4d002a": "image/tiff",
    "49492a00100000004352": "image/tiff",
    "4d4d002a000000005200": "image/tiff",
    "654c696673": "image/x-xcf",
    "4954534608000000600000": "image/x-canon-cr2",
    "495453461a00000003000000": "image/x-canon-cr3",
    "414f4c4949": "image/vnd.ms-photo",
    "38425053": "image/vnd.adobe.photoshop",
    "3c3f78646f636d656e74": "application/x-indesign",
    "504b0304": "application/epub+zip",
    //   '504b0304': 'application/x-xpinstall',  // XPI (Firefox Add-on)
    //   '504b0304': 'application/zip',       // ZIP
    "526172211a0700cf9073": "application/x-rar-compressed",
    "504b0708": "application/x-rar-compressed",
    "504b0304140006000800": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "d0cf11e0a1b11ae10000": "application/msword",
    "25504446": "application/pdf",
    "1f8b08": "application/gzip",
    "1f9d90": "application/x-tar",
    "425a68": "application/x-bzip2",
    "377abcaf271c": "application/x-7z-compressed",
    "425a68393141524320202020202000": "application/x-7z-compressed",
    "4d534346": "application/x-apple-diskimage",
    "61726301": "application/x-apache-arrow",
    "66747970": "video/mp4",
    "4d546864": "audio/midi",
    "1a45dfa3": "video/x-matroska",
    "1a45dfa3010000000000": "video/x-matroska",
    //   '1a45dfa3010000000000': 'video/webm', // WebM
    "00000014667479706d703432": "video/webm",
    "77415645": "video/quicktime",
    //   '52494646': 'video/vnd.avi',         // AVI
    //   '52494646': 'video/x-msvideo',       // AVI
    //   '52494646': 'video/x-msvideo',       // AVI
    //   '52494646': 'video/msvideo',         // AVI
    //   '52494646': 'video/x-avi',           // AVI
    "52494646": "video/mp4",
    "524946464f4500013000": "video/mpeg",
    //   '52494646': 'video/3gpp',            // 3GP
    "fffb": "audio/mpeg",
    "fff3": "audio/mp3",
    "666675": "audio/opus",
    "4f676753": "video/ogg",
    //   '4f676753': 'audio/ogg',             // OGG (Ogg Audio)
    //   '4f676753': 'application/ogg',       // OGG (Ogg Container)
    "664c6143": "audio/x-flac",
    "41564520": "audio/ape",
    "7776706b": "audio/wavpack",
    "464f524d00": "audio/amr",
    "7f454c46": "application/x-elf",
    //   '4d5a': 'application/x-msdownload',  // EXE (Windows Executable)
    "436f6e74656e742d74797065": "application/x-shockwave-flash",
    "7b5c727466": "application/rtf",
    "0061736d": "application/wasm",
    "774f4646": "audio/x-wav",
    "d46d9d6c": "audio/x-musepack",
    "0d0a0d0a": "text/calendar",
    "42494638": "video/x-flv",
    //   '252150532d41646f6265': 'application/postscript', // PostScript
    "252150532d41646f6265": "application/eps",
    "fd377a585a00": "application/x-xz",
    "53514c69746520666f726d6174203300": "application/x-sqlite3",
    "4e45531a": "application/x-nintendo-nes-rom",
    //   '504b0304140006000800': 'application/x-google-chrome-extension', // CRX (Chrome Extension)
    //   '4d534346': 'application/vnd.ms-cab-compressed', // CAB (Microsoft Cabinet File)
    "21": "text/plain",
    "314159265359": "text/plain",
    "7801730d626260": "text/plain",
    "7865726d": "text/plain",
    "63757368000000020000": "text/plain",
    "49545346": "application/x-deb",
    //   '1f8b08': 'application/x-compress',  // COMPRESS (Compress)
    "504b030414": "application/x-compress",
    //   '504b0708': 'application/x-lzip',    // LZ (Lzip)
    //   '504b0304': 'application/x-cfb',     // CFB (Compound File Binary)
    //   '504b0304': 'application/x-mie',     // MIE (MIE)
    //   '1a45dfa3': 'application/mxf',       // MXF (Material Exchange Format)
    "0000001a667479703367706832": "video/mp2t",
    "424c5030": "application/x-blender",
    "4250473031": "image/bpg",
    "4a2d2d20": "image/j2c",
    "0000000cjp2": "image/jp2",
    "0d0a870a": "image/jpx",
    "6a5020200d0a870a": "image/jpx",
    "000000186a703268": "image/jpx",
    "6d6a703268": "image/jpm",
    "4d4a32": "image/mj2",
    //   '464f524d00': 'audio/aiff',          // AIFF (Audio Interchange File Format)
    "464f524d20": "audio/aiff",
    "3c3f786d6c": "application/xml",
    //   '3c3f786d6c': 'text/xml',            // XML (alternative)
    "7573746172": "application/tar+gzip",
    "465753": "application/x-mobipocket-ebook",
    "667479706d6f6f6d": "application/vnd.tcpdump.pcap",
    "444d5321": "audio/x-dsf",
    "4c495445": "application/x.ms.shortcut",
    "53746f7261676554696d6573": "application/x.apple.alias",
    "46575320": "application/x-mobipocket-ebook",
    "6f6c796d7075733f6772652d": "audio/opus",
    //   '47494638': 'image/apng',            // APNG
    "4f52494643": "image/x-olympus-orf",
    "49534328": "image/x-sony-arw",
    "49534344": "image/x-adobe-dng",
    "49545046": "image/x-panasonic-rw2",
    "465547464946": "image/x-fujifilm-raf",
    //   '1a45dfa3010000000000': 'video/x-m4v', // M4V
    "667479702": "video/3gpp2",
    //   '504b030414': 'application/x-esri-shape', // SHP (Esri Shapefile)
    "fff30000": "audio/aac",
    "466f726d6174203300": "audio/x-it",
    //   '4d546864': 'audio/x-m4a',           // M4A
    //   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PPTX (PowerPoint)
    "44534420": "application/x-esri-shape",
    "494433": "audio/aac",
    //   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX (Excel)
    //   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX (Word)
    "5a4f4f20": "application/x-xz",
    "fdfd580000": "application/x-sqlite3",
    "50616e20636f6f6b696e": "image/x-icon",
    "47494638": "image/gif",
    "4649463837610111": "image/vnd.adobe.photoshop",
    "0000010000": "application/x-elf",
    "4d5a": "application/x-msdownload",
    //   '464f524d00': 'audio/x-dsf',         // DSD (Direct Stream Digital)
    //   '4c495445': 'application/x.ms.shortcut', // LNK (Windows Shortcut)
    "437265617469766520436f6d6d656e74": "application/vnd.ms-htmlhelp",
    //   '4d534346': 'application/vnd.ms-cab-compressed', // CAB (Microsoft Cabinet File)
    "415647": "model/stl",
    "6d737132": "model/3mf",
    "000001c0": "image/jxl",
    "b501": "application/zstd",
    "4a4c53": "image/jls",
    //   'd0cf11e0a1b11ae10000': 'application/x-ole-storage', // OLE (Object Linking and Embedding)
    "e3828596": "audio/x-rmf",
    "2345584548494c5": "application/vnd.ms-outlook",
    "0c6d6b6e6f74656e73": "audio/x-mid",
    //   '4d534346': 'application/java-vm',   // JAR (Java Archive)
    "1a0b617272616e673135": "application/x-arj",
    //   '1f9d90': 'application/x-iso9660-image', // ISO (International Organization for Standardization)
    "6173642020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020": "application/x-squashfs",
    "3026b2758e66cf11a6d900aa0062ce6c": "application/x-msdownload",
    "536c595845": "application/vnd.iccprofile", // ICC (International Color Consortium)
};
const mimeTypeFromBuffer = (buffer) => {
    const header = buffer.toString("hex", 0, 16);
    for (const magicNumber in mimeTypes) {
        if (header.startsWith(magicNumber)) {
            return mimeTypes[magicNumber];
        }
    }
    return "application/octet-stream";
};
exports.mimeTypeFromBuffer = mimeTypeFromBuffer;
//# sourceMappingURL=mimeTypeFromBuffer.js.map