import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class DisplayOrderCount {

    private static class CommandLine {
        String filename;
        boolean onlyCountReady;
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
        if (args.length == 0) throw new RuntimeException("must supply a filename");
        CommandLine commandLine = new CommandLine();
        commandLine.filename = args[args.length - 1];
        commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));

        return countOrders(commandLine);
    }

    private static long countOrders(CommandLine commandLine) throws java.io.IOException {
        File input = Paths.get(commandLine.filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (commandLine.onlyCountReady) {
            return Stream.of(orders).filter(order -> "ready".equals(order.status)).count();
        } else {
            return orders.length;
        }
    }
}


