import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class DisplayOrderCount {

    private static class CommandLine {
        private String[] args;

        public CommandLine(String[] args) {
            if (args.length == 0) throw new RuntimeException("must supply a filename");
            this.args = args;
        }

        String filename() {
            return args[args.length - 1];
        }

        boolean onlyCountReady() {
            return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
        }
    }

    public static void main(String[] args) {
        try {
            System.out.println(run(args));
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws java.io.IOException {
        return countOrders(new CommandLine(args));
    }

    private static long countOrders(CommandLine commandLine) throws java.io.IOException {
        Order[] orders = new ObjectMapper().readValue(readOrderFile(commandLine), Order[].class);
        
        if (commandLine.onlyCountReady()) {
            return Stream.of(orders).filter(order -> "ready".equals(order.status)).count();
        } else {
            return orders.length;
        }
    }

    private static File readOrderFile(CommandLine commandLine) {
        return Paths.get(commandLine.filename()).toFile();
    }
}


