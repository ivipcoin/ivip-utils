const mimeTypes = {
	"ffd8ffe000104a464946": "image/jpeg", // JPEG
	"89504e470d0a1a0a0000": "image/png", // PNG
	"47494638396126026f01": "image/gif", // GIF
	"52494646574f455053": "image/webp", // WebP
	"464c4946": "image/flif", // FLIF
	"424d": "image/bmp", // BMP
	"49492a00": "image/tiff", // TIFF
	"4d4d002a": "image/tiff", // TIFF (big-endian)
	"49492a00100000004352": "image/tiff", // TIFF (Intel)
	"4d4d002a000000005200": "image/tiff", // TIFF (Motorola)
	"654c696673": "image/x-xcf", // XCF (GIMP)
	"4954534608000000600000": "image/x-canon-cr2", // Canon CR2
	"495453461a00000003000000": "image/x-canon-cr3", // Canon CR3
	"414f4c4949": "image/vnd.ms-photo", // Windows Photo (WMP)
	"38425053": "image/vnd.adobe.photoshop", // Photoshop
	"3c3f78646f636d656e74": "application/x-indesign", // Adobe InDesign
	"504b0304": "application/epub+zip", // EPUB
	//   '504b0304': 'application/x-xpinstall',  // XPI (Firefox Add-on)
	//   '504b0304': 'application/zip',       // ZIP
	"526172211a0700cf9073": "application/x-rar-compressed", // RAR
	"504b0708": "application/x-rar-compressed", // RAR
	"504b0304140006000800": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
	"d0cf11e0a1b11ae10000": "application/msword", // DOC
	"25504446": "application/pdf", // PDF
	"1f8b08": "application/gzip", // GZIP
	"1f9d90": "application/x-tar", // TAR
	"425a68": "application/x-bzip2", // BZIP2
	"377abcaf271c": "application/x-7z-compressed", // 7z
	"425a68393141524320202020202000": "application/x-7z-compressed", // 7z (alternative)
	"4d534346": "application/x-apple-diskimage", // DMG
	"61726301": "application/x-apache-arrow", // Apache Arrow
	"66747970": "video/mp4", // MP4
	"4d546864": "audio/midi", // MIDI
	"1a45dfa3": "video/x-matroska", // Matroska (MKV)
	"1a45dfa3010000000000": "video/x-matroska", // Matroska (MKV)
	//   '1a45dfa3010000000000': 'video/webm', // WebM
	"00000014667479706d703432": "video/webm", // WebM (alternative)
	"77415645": "video/quicktime", // QuickTime (MOV)
	//   '52494646': 'video/vnd.avi',         // AVI
	//   '52494646': 'video/x-msvideo',       // AVI
	//   '52494646': 'video/x-msvideo',       // AVI
	//   '52494646': 'video/msvideo',         // AVI
	//   '52494646': 'video/x-avi',           // AVI
	"52494646": "video/mp4", // AVI
	"524946464f4500013000": "video/mpeg", // MPEG
	//   '52494646': 'video/3gpp',            // 3GP
	"fffb": "audio/mpeg", // MP3
	"fff3": "audio/mp3", // MP3 (alternative)
	"666675": "audio/opus", // Opus
	"4f676753": "video/ogg", // OGG (Ogg Video)
	//   '4f676753': 'audio/ogg',             // OGG (Ogg Audio)
	//   '4f676753': 'application/ogg',       // OGG (Ogg Container)
	"664c6143": "audio/x-flac", // FLAC
	"41564520": "audio/ape", // APE (Monkey's Audio)
	"7776706b": "audio/wavpack", // WavPack
	"464f524d00": "audio/amr", // AMR
	"7f454c46": "application/x-elf", // ELF (Executable and Linkable Format)
	//   '4d5a': 'application/x-msdownload',  // EXE (Windows Executable)
	"436f6e74656e742d74797065": "application/x-shockwave-flash", // SWF (Flash)
	"7b5c727466": "application/rtf", // RTF (Rich Text Format)
	"0061736d": "application/wasm", // WebAssembly (Wasm)
	"774f4646": "audio/x-wav", // WAV (Waveform Audio File Format)
	"d46d9d6c": "audio/x-musepack", // Musepack (MPC)
	"0d0a0d0a": "text/calendar", // ICS (iCalendar)
	"42494638": "video/x-flv", // FLV (Flash Video)
	//   '252150532d41646f6265': 'application/postscript', // PostScript
	"252150532d41646f6265": "application/eps", // EPS (Encapsulated PostScript)
	"fd377a585a00": "application/x-xz", // XZ
	"53514c69746520666f726d6174203300": "application/x-sqlite3", // SQLite
	"4e45531a": "application/x-nintendo-nes-rom", // NES
	//   '504b0304140006000800': 'application/x-google-chrome-extension', // CRX (Chrome Extension)
	//   '4d534346': 'application/vnd.ms-cab-compressed', // CAB (Microsoft Cabinet File)
	"21": "text/plain", // ASC (ASCII text)
	"314159265359": "text/plain", // TEXT (ASCII text)
	"7801730d626260": "text/plain", // TEXT (ASCII text)
	"7865726d": "text/plain", // TXT (ASCII text)
	"63757368000000020000": "text/plain", // NFO (ASCII text)
	"49545346": "application/x-deb", // DEB (Debian Package)
	//   '1f8b08': 'application/x-compress',  // COMPRESS (Compress)
	"504b030414": "application/x-compress", // COMPRESS (Compress)
	//   '504b0708': 'application/x-lzip',    // LZ (Lzip)
	//   '504b0304': 'application/x-cfb',     // CFB (Compound File Binary)
	//   '504b0304': 'application/x-mie',     // MIE (MIE)
	//   '1a45dfa3': 'application/mxf',       // MXF (Material Exchange Format)
	"0000001a667479703367706832": "video/mp2t", // MPEG-TS (MPEG Transport Stream)
	"424c5030": "application/x-blender", // BLEND (Blender)
	"4250473031": "image/bpg", // BPG (Better Portable Graphics)
	"4a2d2d20": "image/j2c", // J2C (JPEG 2000)
	"0000000cjp2": "image/jp2", // JP2 (JPEG 2000)
	"0d0a870a": "image/jpx", // JPX (JPEG 2000)
	"6a5020200d0a870a": "image/jpx", // JPX (JPEG 2000)
	"000000186a703268": "image/jpx", // JPX (JPEG 2000)
	"6d6a703268": "image/jpm", // JPM (JPEG 2000)
	"4d4a32": "image/mj2", // MJ2 (Motion JPEG 2000)
	//   '464f524d00': 'audio/aiff',          // AIFF (Audio Interchange File Format)
	"464f524d20": "audio/aiff", // AIFF (Audio Interchange File Format)
	"3c3f786d6c": "application/xml", // XML
	//   '3c3f786d6c': 'text/xml',            // XML (alternative)
	"7573746172": "application/tar+gzip", // TAR.GZ
	"465753": "application/x-mobipocket-ebook", // MOBI (Mobipocket eBook)
	"667479706d6f6f6d": "application/vnd.tcpdump.pcap", // PCAP (Packet Capture)
	"444d5321": "audio/x-dsf", // DSD (Direct Stream Digital)
	"4c495445": "application/x.ms.shortcut", // LNK (Windows Shortcut)
	"53746f7261676554696d6573": "application/x.apple.alias", // Alias (Apple)
	"46575320": "application/x-mobipocket-ebook", // MOBI (Mobipocket eBook)
	"6f6c796d7075733f6772652d": "audio/opus", // OGA (Ogg Audio)
	//   '47494638': 'image/apng',            // APNG
	"4f52494643": "image/x-olympus-orf", // ORF (Olympus RAW Format)
	"49534328": "image/x-sony-arw", // ARW (Sony Alpha RAW)
	"49534344": "image/x-adobe-dng", // DNG (Adobe Digital Negative)
	"49545046": "image/x-panasonic-rw2", // RW2 (Panasonic RAW)
	"465547464946": "image/x-fujifilm-raf", // RAF (Fujifilm RAW)
	//   '1a45dfa3010000000000': 'video/x-m4v', // M4V
	"667479702": "video/3gpp2", // 3GPP2
	//   '504b030414': 'application/x-esri-shape', // SHP (Esri Shapefile)
	"fff30000": "audio/aac", // AAC
	"466f726d6174203300": "audio/x-it", // XM (Fasttracker 2 Extended Module)
	//   '4d546864': 'audio/x-m4a',           // M4A
	//   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PPTX (PowerPoint)
	"44534420": "application/x-esri-shape", // SHP (Esri Shapefile)
	"494433": "audio/aac", // AAC
	//   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX (Excel)
	//   '504b0304140006000800': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX (Word)
	"5a4f4f20": "application/x-xz", // XZ
	"fdfd580000": "application/x-sqlite3", // SQLite
	"50616e20636f6f6b696e": "image/x-icon", // ICO (Icon)
	"47494638": "image/gif", // GIF
	"4649463837610111": "image/vnd.adobe.photoshop", // Photoshop
	"0000010000": "application/x-elf", // ELF (Executable and Linkable Format)
	"4d5a": "application/x-msdownload", // EXE (Windows Executable)
	//   '464f524d00': 'audio/x-dsf',         // DSD (Direct Stream Digital)
	//   '4c495445': 'application/x.ms.shortcut', // LNK (Windows Shortcut)
	"437265617469766520436f6d6d656e74": "application/vnd.ms-htmlhelp", // CHM (Microsoft Compiled HTML Help)
	//   '4d534346': 'application/vnd.ms-cab-compressed', // CAB (Microsoft Cabinet File)
	"415647": "model/stl", // STL (Stereolithography)
	"6d737132": "model/3mf", // 3MF (3D Manufacturing Format)
	"000001c0": "image/jxl", // JXL (JPEG XL)
	"b501": "application/zstd", // ZSTD
	"4a4c53": "image/jls", // JLS (JPEG-LS)
	//   'd0cf11e0a1b11ae10000': 'application/x-ole-storage', // OLE (Object Linking and Embedding)
	"e3828596": "audio/x-rmf", // RMF (Rich Music Format)
	"2345584548494c5": "application/vnd.ms-outlook", // PST (Outlook Data File)
	"0c6d6b6e6f74656e73": "audio/x-mid", // MID (MIDI - Musical Instrument Digital Interface)
	//   '4d534346': 'application/java-vm',   // JAR (Java Archive)
	"1a0b617272616e673135": "application/x-arj", // ARJ (Archived by Robert Jung)
	//   '1f9d90': 'application/x-iso9660-image', // ISO (International Organization for Standardization)
	"6173642020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020": "application/x-squashfs", // SQUASHFS (Squashfs File System)
	"3026b2758e66cf11a6d900aa0062ce6c": "application/x-msdownload", // CAB (Microsoft Cabinet File)
	"536c595845": "application/vnd.iccprofile", // ICC (International Color Consortium)
};

export const mimeTypeFromBuffer = (buffer: Buffer): string => {
	const header = buffer.toString("hex", 0, 16);
	for (const magicNumber in mimeTypes) {
		if (header.startsWith(magicNumber)) {
			return (mimeTypes as any)[magicNumber];
		}
	}
	return "application/octet-stream";
};
